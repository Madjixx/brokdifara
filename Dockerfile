ARG NODE_VERSION=24.12.0
ARG NGINX_VERSION=stable
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

FROM base AS deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM deps AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci
COPY . .
RUN npm run build

FROM nginx:${NGINX_VERSION} AS final
EXPOSE 80
EXPOSE 443
COPY --from=build /usr/src/app/dist/demo/browser /usr/share/nginx/html

