FROM node:20-alpine AS frontend-build
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM node:20-alpine AS cms-build
# PAYLOAD_PUBLIC_* worden tijdens de admin-build in de bundle gebakken.
# PAYLOAD_PUBLIC_SERVER_URL bewust niet: dan gebruikt de admin relatieve paden (geen CORS per domein).
ARG PAYLOAD_PUBLIC_FRONTEND_URL
WORKDIR /app
COPY cms/package*.json ./
RUN npm ci
COPY cms/ .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=cms-build /app/dist ./dist
COPY --from=cms-build /app/build ./build
COPY --from=cms-build /app/node_modules ./node_modules
COPY --from=cms-build /app/package.json ./package.json
COPY --from=frontend-build /frontend/dist ./public

# Zonder NODE_ENV=production draait Payload een webpack dev-server voor de admin (veel RAM)
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=/app/dist/payload.config.js
EXPOSE 8080
CMD ["node", "dist/server.js"]
