ARG BASE_IMAGE=node:16

FROM ${BASE_IMAGE} AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build

FROM ${BASE_IMAGE}-alpine

WORKDIR /app

COPY scripts/run.sh ./scripts/run.sh

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./.env.production ./env

RUN yarn --production=true --frozen-lockfile install && yarn cache clean

COPY --from=builder /app/.output ./.output

ENTRYPOINT []

CMD ["./scripts/run.sh"]
