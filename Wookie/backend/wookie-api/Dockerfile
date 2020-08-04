FROM node:12

EXPOSE 3001

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/

RUN npm install

# Copying source files
COPY . /usr/src/app

RUN npm run build
ENV PORT 3001

# push data from json to algolia api

RUN node algolia/pushDataSearchEngine.js

# Running the app
CMD "npm" "run" "start"