FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV PAYLOAD_CONFIG_PATH=/app/dist/payload.config.js
EXPOSE 3001
CMD ["node", "dist/server.js"]
