ARG BASE_IMAGE=node:16

FROM ${BASE_IMAGE} AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM ${BASE_IMAGE}-alpine

WORKDIR /app

COPY docker/run.sh /usr/local/bin/run.sh

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn --production=true --frozen-lockfile install && yarn cache clean

COPY --from=builder /app/.output ./.output

ENTRYPOINT []

CMD ["/usr/local/bin/run.sh"]
