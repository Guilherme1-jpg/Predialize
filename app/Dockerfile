FROM node:14.17.0-alpine

WORKDIR /app

COPY . .

RUN npm update && npm install
RUN npm run build

EXPOSE 4200

CMD ["npm", "run", "start"]
