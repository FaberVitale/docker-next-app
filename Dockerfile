# Documentation: https://docs.docker.com/engine/reference/builder/#syntax
FROM node:12.10.0-alpine as build-env

ARG PORT=3000
ARG ROOT_APP_DIR=/home/node/docker-next-app
ENV PORT=${PORT}
ENV NODE_ENV=build-env

WORKDIR ${ROOT_APP_DIR}

RUN apk --no-cache add build-base file nasm autoconf bash libpng libpng-dev git automake make g++ libtool nasm python

COPY . .

# `yarn` skips `devDependencies` if the `NODE_ENV` is set to production.
RUN yarn install  --production=false --frozen-lockfile \
    && yarn build \
    && echo "[build-env]: node_modules before prune $(du -c -h ./node_modules | tail -n 1)"

# We do not add `devDependencies` to the final container.
RUN yarn install --prod --frozen-lockfile \
    && echo "[build-env]: node_modules size after prune $(du -c -h ./node_modules | tail -n 1)"

FROM node:12.10.0-alpine

ARG PORT=3000
ARG ROOT_APP_DIR=/home/node/docker-next-app
ENV PORT=${PORT}
ENV NODE_ENV=production

WORKDIR ${ROOT_APP_DIR}

COPY --from=build-env ${ROOT_APP_DIR} ./

EXPOSE ${PORT}

USER node

ENTRYPOINT [ "yarn" ]
CMD [ "start:prod"]
