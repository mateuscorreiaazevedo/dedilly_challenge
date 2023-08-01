FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
RUN yarn prepare

COPY . .

RUN yarn build

EXPOSE 4173

CMD [ "yarn", "preview" ]

