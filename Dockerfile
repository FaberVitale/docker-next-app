# Documentation: https://docs.docker.com/engine/reference/builder/#syntax
FROM node:12.10.0-alpine as build-env

ARG PORT=3000
ENV PORT=${PORT}

RUN apk --no-cache add build-base file nasm autoconf bash libpng libpng-dev git automake make g++ libtool nasm python

COPY . .

# `yarn` skips `devDependencies` if the `NODE_ENV` is set to production.
RUN yarn install && yarn build

FROM node:12.10.0-alpine

ARG PORT=3000
ENV PORT=${PORT}
ENV NODE_ENV=production
COPY --from=build-env . ./

RUN apk --no-cache add build-base file nasm autoconf bash libpng libpng-dev git automake make g++ libtool nasm python

# We do not add `devDependencies` to the final container.
RUN yarn install --prod

EXPOSE ${PORT}

ENTRYPOINT [ "yarn" ]
CMD [ "start:prod"]
