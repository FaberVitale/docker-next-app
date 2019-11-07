# Documentation: https://docs.docker.com/engine/reference/builder/#syntax
FROM node:12.10.0-alpine as build-env

ARG PORT=3000
ARG ROOT_APP_DIR=/home/node/docker-next-app
ARG API_ROOT=http://localhost:5000/api
ENV PORT=${PORT}
ENV NODE_ENV=build-env
ENV API_ROOT=${API_ROOT}

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

ARG PORT=5000
ARG ROOT_APP_DIR=/home/node/docker-next-app
ARG API_ROOT=http://localhost:5000/api
ENV PORT=${PORT}
ENV NODE_ENV=production
ENV API_ROOT=${API_ROOT}

WORKDIR ${ROOT_APP_DIR}

# We copy only the relevant data leaving behind build dependencies
# and `yarn` cache (https://yarnpkg.com/lang/en/docs/cli/cache/).
COPY --from=build-env ${ROOT_APP_DIR} ./

EXPOSE ${PORT}

# Run container as non root.
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

ENTRYPOINT [ "yarn" ]
CMD [ "start:prod"]
