import { GAME_DATA } from "./data.js";

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function checkCondition(metrics, condition) {
  const value = metrics[condition.metric];
  switch (condition.op) {
    case ">":
      return value > condition.value;
    case ">=":
      return value >= condition.value;
    case "<":
      return value < condition.value;
    case "<=":
      return value <= condition.value;
    case "==":
      return value === condition.value;
    default:
      return false;
  }
}

function allConditionsPass(metrics, checks = []) {
  return checks.every((condition) => checkCondition(metrics, condition));
}

class GameEngine {
  constructor(data) {
    this.data = data;
    this.questions = data.stages.flatMap((stage) =>
      stage.questions.map((question) => ({
        ...question,
        stageId: stage.id,
        stageName: stage.name,
        scene: stage.scene,
      }))
    );

    this.state = {
      currentStage: 1,
      questionIndex: 0,
      metrics: { ...data.initialMetrics },
      history: [],
      activeInterceptor: null,
      ending: null,
      finished: false,
    };
  }

  getCurrentQuestion() {
    return this.questions[this.state.questionIndex] || null;
  }

  getProgress() {
    return {
      answered: this.state.history.filter((entry) => entry.type === "choice").length,
      total: this.questions.length,
    };
  }

  applyChoice(choiceId) {
    if (this.state.finished || this.state.activeInterceptor) {
      return;
    }

    const question = this.getCurrentQuestion();
    if (!question) {
      return;
    }

    const choice = question.choices.find((item) => item.id === choiceId);
    if (!choice) {
      return;
    }

    const before = { ...this.state.metrics };
    const effects = choice.effects || {};

    Object.entries(effects).forEach(([metric, delta]) => {
      const current = this.state.metrics[metric];
      if (typeof current === "number" && typeof delta === "number") {
        this.state.metrics[metric] = clamp(current + delta);
      }
    });

    this.state.history.push({
      type: "choice",
      questionId: question.id,
      questionTitle: question.promptTitle,
      stage: question.stageName,
      choiceId: choice.id,
      choiceLabel: choice.label,
      effects,
      before,
      after: { ...this.state.metrics },
    });

    this.advanceFromQuestion(question.id);
  }

  advanceFromQuestion(questionId) {
    const interceptor = this.data.interceptors.find(
      (item) => item.triggerAfterQuestionId === questionId
    );

    if (interceptor) {
      const selectedScenario =
        interceptor.scenarios.find((scenario) =>
          allConditionsPass(this.state.metrics, scenario.when)
        ) || interceptor.fallback;

      this.state.activeInterceptor = {
        id: interceptor.id,
        title: interceptor.title,
        subtitle: interceptor.subtitle,
        scenario: selectedScenario,
      };

      this.state.history.push({
        type: "interceptor",
        interceptorId: interceptor.id,
        scenarioId: selectedScenario.id,
        title: interceptor.title,
        scenarioTitle: selectedScenario.title,
        text: selectedScenario.text,
        metricsSnapshot: { ...this.state.metrics },
      });

      return;
    }

    this.moveToNextQuestionOrEnd();
  }

  continueAfterInterceptor() {
    if (!this.state.activeInterceptor) {
      return;
    }

    this.state.activeInterceptor = null;
    this.moveToNextQuestionOrEnd();
  }

  moveToNextQuestionOrEnd() {
    this.state.questionIndex += 1;
    const nextQuestion = this.getCurrentQuestion();

    if (!nextQuestion) {
      this.resolveEnding();
      return;
    }

    this.state.currentStage = nextQuestion.stageId;
  }

  resolveEnding() {
    const found =
      this.data.endings.find((ending) =>
        allConditionsPass(this.state.metrics, ending.checks)
      ) || this.data.fallbackEnding;

    this.state.ending = found;
    this.state.finished = true;
  }

  restart() {
    this.state = {
      currentStage: 1,
      questionIndex: 0,
      metrics: { ...this.data.initialMetrics },
      history: [],
      activeInterceptor: null,
      ending: null,
      finished: false,
    };
  }
}

const appEl = document.getElementById("app");
const engine = new GameEngine(GAME_DATA);

function formatEffects(effects) {
  const entries = Object.entries(effects || {});
  if (!entries.length) return "No direct metric shift";
  return entries
    .map(([metric, delta]) => `${metric} ${delta >= 0 ? "+" : ""}${delta}`)
    .join("  |  ");
}

function metricBar(metric, value) {
  const colors = {
    AP: "from-cyan-400 to-cyan-600",
    EI: "from-rose-400 to-rose-600",
    CSF: "from-emerald-400 to-emerald-600",
    PP: "from-amber-400 to-amber-600",
    IC: "from-indigo-400 to-indigo-600",
  };

  return `
    <div class="rounded-xl border border-white/20 bg-slate-900/60 p-3">
      <div class="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
        <span>${GAME_DATA.metricLabels[metric]}</span>
        <span class="font-semibold text-slate-100">${value}</span>
      </div>
      <div class="h-2.5 overflow-hidden rounded-full bg-slate-700/60">
        <div class="h-full rounded-full bg-gradient-to-r ${colors[metric]} transition-all duration-500" style="width:${value}%"></div>
      </div>
    </div>
  `;
}

function renderTopBar() {
  const progress = engine.getProgress();
  const metrics = engine.state.metrics;

  return `
    <header class="sticky top-0 z-20 border-b border-white/20 bg-slate-950/70 backdrop-blur-lg">
      <div class="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div class="mb-3 flex items-center justify-between gap-4">
          <div>
            <h1 class="text-lg font-semibold tracking-wide text-white">${GAME_DATA.title}</h1>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-300">Stage ${engine.state.currentStage} of 5</p>
          </div>
          <div class="text-right">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-300">Questions</p>
            <p class="text-sm font-semibold text-white">${progress.answered} / ${progress.total}</p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          ${Object.entries(metrics)
            .map(([metric, value]) => metricBar(metric, value))
            .join("")}
        </div>
      </div>
    </header>
  `;
}

function renderQuestionScreen() {
  const question = engine.getCurrentQuestion();
  if (!question) return "";

  const dialogue = Object.entries(question.dialogue)
    .map(
      ([role, line]) => `
      <li class="rounded-lg border border-white/15 bg-slate-950/35 p-3">
        <p class="text-xs uppercase tracking-[0.18em] text-cyan-200">${role}</p>
        <p class="mt-1 text-sm text-slate-100">${line}</p>
      </li>
    `
    )
    .join("");

  const choices = question.choices
    .map(
      (choice) => `
      <button
        data-choice-id="${choice.id}"
        class="choice-btn group w-full rounded-xl border border-white/25 bg-slate-900/50 p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-slate-900/75"
      >
        <p class="text-sm font-medium text-white">${choice.label}</p>
        <p class="mt-2 text-xs uppercase tracking-[0.16em] text-cyan-200/90">${formatEffects(choice.effects)}</p>
      </button>
    `
    )
    .join("");

  return `
    <main class="mx-auto mt-8 max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <section class="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <article class="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/65 p-6 shadow-2xl shadow-slate-950/50">
          <div class="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <p class="text-xs uppercase tracking-[0.2em] text-cyan-200">${question.stageName} · ${question.scene.name}</p>
          <h2 class="mt-2 text-2xl font-semibold text-white">${question.promptTitle}</h2>
          <p class="mt-3 text-slate-200">${question.prompt}</p>
          <p class="mt-4 text-xs uppercase tracking-[0.18em] text-slate-300">Scene</p>
          <p class="mt-1 text-sm text-slate-100">${question.scene.description}</p>

          <ul class="mt-6 space-y-3">${dialogue}</ul>

          <div class="mt-6 space-y-3">${choices}</div>
        </article>

        <aside class="rounded-2xl border border-white/20 bg-slate-900/55 p-6">
          <p class="text-xs uppercase tracking-[0.2em] text-amber-200">Decision Dashboard</p>
          <h3 class="mt-2 text-xl font-semibold text-white">Operational Brief</h3>
          <p class="mt-3 text-sm text-slate-200">Every choice changes the trajectory across performance, safety, pressure, and investor dynamics. Interceptor audits appear after Product Cycles 1 and 2.</p>
          <div class="mt-5 rounded-xl border border-white/20 bg-slate-950/40 p-4 text-xs text-slate-200">
            <p class="uppercase tracking-[0.16em] text-slate-300">Current Stage</p>
            <p class="mt-1 text-sm font-semibold text-white">${question.stageName}</p>
            <p class="mt-3 uppercase tracking-[0.16em] text-slate-300">Question ID</p>
            <p class="mt-1 text-sm text-cyan-200">${question.id.toUpperCase()}</p>
          </div>
        </aside>
      </section>
    </main>
  `;
}

function renderInterceptorScreen() {
  const interceptor = engine.state.activeInterceptor;
  if (!interceptor) return "";

  return `
    <main class="mx-auto mt-8 max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
      <section class="rounded-2xl border border-amber-300/40 bg-amber-500/10 p-8 shadow-xl shadow-amber-950/30">
        <p class="text-xs uppercase tracking-[0.2em] text-amber-200">${interceptor.subtitle}</p>
        <h2 class="mt-2 text-3xl font-semibold text-white">${interceptor.title}</h2>
        <h3 class="mt-5 text-xl font-semibold text-amber-100">${interceptor.scenario.title}</h3>
        <p class="mt-3 text-slate-100">${interceptor.scenario.text}</p>
        <button id="continue-interceptor" class="mt-8 rounded-xl border border-amber-200/60 bg-amber-300/20 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/35">
          Continue To Next Stage
        </button>
      </section>
    </main>
  `;
}

function renderSummaryScreen() {
  const ending = engine.state.ending;
  const choices = engine.state.history.filter((entry) => entry.type === "choice");
  const timeline = choices
    .map(
      (entry, index) => `
      <li class="rounded-lg border border-white/15 bg-slate-900/45 p-4">
        <p class="text-xs uppercase tracking-[0.16em] text-slate-300">Decision ${index + 1} · ${entry.stage}</p>
        <p class="mt-1 font-medium text-white">${entry.questionTitle}</p>
        <p class="mt-1 text-sm text-cyan-200">${entry.choiceLabel}</p>
        <p class="mt-2 text-xs text-slate-300">${formatEffects(entry.effects)}</p>
      </li>
    `
    )
    .join("");

  return `
    <main class="mx-auto mt-8 max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <section class="rounded-2xl border border-white/20 bg-slate-900/65 p-8 shadow-2xl shadow-slate-950/50">
        <p class="text-xs uppercase tracking-[0.2em] text-cyan-200">Final Outcome</p>
        <h2 class="mt-2 text-3xl font-semibold text-white">${ending.name}</h2>
        <p class="mt-2 text-sm uppercase tracking-[0.18em] text-amber-200">${ending.tone}</p>
        <p class="mt-4 max-w-3xl text-slate-100">${ending.narrative}</p>

        <div class="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 class="text-lg font-semibold text-white">Final Metrics</h3>
            <div class="mt-4 grid gap-3">
              ${Object.entries(engine.state.metrics)
                .map(([metric, value]) => metricBar(metric, value))
                .join("")}
            </div>
            <button id="restart-game" class="mt-6 rounded-xl border border-cyan-200/60 bg-cyan-500/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/35">
              Restart Game
            </button>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white">Decision Timeline</h3>
            <ul class="mt-4 max-h-[28rem] space-y-3 overflow-y-auto pr-2">${timeline}</ul>
          </div>
        </div>
      </section>
    </main>
  `;
}

function bindEvents() {
  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceId = button.getAttribute("data-choice-id");
      engine.applyChoice(choiceId);
      render();
    });
  });

  const continueButton = document.getElementById("continue-interceptor");
  if (continueButton) {
    continueButton.addEventListener("click", () => {
      engine.continueAfterInterceptor();
      render();
    });
  }

  const restartButton = document.getElementById("restart-game");
  if (restartButton) {
    restartButton.addEventListener("click", () => {
      engine.restart();
      render();
    });
  }
}

function render() {
  const question = engine.getCurrentQuestion();
  const sceneBackground = question?.scene?.background || "linear-gradient(135deg, #0f172a 0%, #111827 100%)";

  appEl.innerHTML = `
    <div class="min-h-screen text-slate-100" style="background:${sceneBackground}">
      <div class="min-h-screen bg-[linear-gradient(to_bottom,rgba(2,6,23,0.35),rgba(2,6,23,0.88))]">
        ${renderTopBar()}
        ${engine.state.finished
          ? renderSummaryScreen()
          : engine.state.activeInterceptor
            ? renderInterceptorScreen()
            : renderQuestionScreen()}
      </div>
    </div>
  `;

  bindEvents();
}

render();
