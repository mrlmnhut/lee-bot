FROM node:16

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --production --no-optional

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]