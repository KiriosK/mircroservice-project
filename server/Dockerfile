FROM node:lts-alpine 

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index" ]
