FROM node:20.4-alpine3.17 as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
