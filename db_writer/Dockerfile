FROM node:lts-alpine 

WORKDIR /
COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index" ]
