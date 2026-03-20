# Use a lightweight Node.js image
FROM node:20-alpine

WORKDIR /app

# Copy the game code
COPY game.code/ .

# Expose the port
EXPOSE 5500

# Install a simple HTTP server
RUN npm install -g http-server

# Serve the application
CMD ["http-server", "-p", "5500", "-c-1"]
