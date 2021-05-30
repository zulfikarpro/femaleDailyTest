FROM node:13.11.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 

WORKDIR /home/node/app

COPY package.json /home/node/app

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "node", "app.js" ]