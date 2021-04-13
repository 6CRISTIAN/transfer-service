FROM node:14.16.0-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . ./
RUN npm run build

EXPOSE 4800
CMD [ "node", "server.js" ]