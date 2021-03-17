# pull official base image
FROM node:12.19.0-alpine

# set working directory
WORKDIR /usr/src/appS

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --production

# copy project
COPY . .