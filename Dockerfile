# syntax=docker/dockerfile:1

# Build on the runner's native architecture. Nuxt's output is plain JavaScript,
# so one build serves both amd64 and arm64 — only the runtime stage varies.
# Without --platform=$BUILDPLATFORM the arm64 build runs under QEMU emulation
# and takes several times longer.
FROM --platform=$BUILDPLATFORM node:22-alpine AS build

WORKDIR /app

# Playwright is a devDependency; its postinstall downloads ~300MB of browsers
# that the image build has no use for.
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production \
    NITRO_HOST=0.0.0.0 \
    NITRO_PORT=3000

# .output is fully self-contained: it bundles the server and its dependencies,
# so no node_modules and no package.json are needed at runtime.
COPY --from=build /app/.output ./.output

USER node
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
