FROM node:18-alpine3.17 as common-build-stage

WORKDIR /usr/app

COPY . ./

RUN npm install

EXPOSE 3004

FROM common-build-stage as development-build-stage

ENTRYPOINT ["npm", "run", "start"]
