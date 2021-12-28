FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY .env.example .env.development.local

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "serve" ]