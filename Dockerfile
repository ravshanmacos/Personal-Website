FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
CMD["node", "server.js"]