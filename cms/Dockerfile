FROM node:20-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM node:20-alpine AS cms-build
WORKDIR /app
COPY cms/package*.json ./
RUN npm ci
COPY cms/ .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=cms-build /app/dist ./dist
COPY --from=cms-build /app/node_modules ./node_modules
COPY --from=cms-build /app/package.json ./package.json
COPY --from=frontend-build /frontend/dist ./public

ENV PAYLOAD_CONFIG_PATH=/app/dist/payload.config.js
EXPOSE 8080
CMD ["node", "dist/server.js"]
