FROM node:11.1.0-alpine AS node_base

FROM node_base as deps
WORKDIR /usr/app
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json
RUN npm i

FROM node_base as build
WORKDIR /usr/app
COPY --from=deps /usr/app/node_modules /usr/app/node_modules
COPY . /usr/app
RUN npm run build

FROM scratch AS ui
COPY --from=build /usr/app/dist /usr/app


FROM socialengine/nginx-spa
COPY --from=ui /usr/app /app