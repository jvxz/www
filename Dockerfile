FROM oven/bun:latest-alpine AS build

ARG NUXT_WAKATIME_KEY

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . ./

RUN bun run build

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/.output/ ./

ENV NODE_ENV=production

CMD ["node", "/app/server/index.mjs"]
