FROM node:20-alpine
WORKDIR /app

COPY cms/package*.json ./
RUN npm ci

COPY cms/ .
RUN npm run build

ENV PAYLOAD_CONFIG_PATH=/app/dist/payload.config.js
EXPOSE 8080
CMD ["node", "dist/server.js"]
