FROM node:18-alpine3.16
WORKDIR /app
COPY . .
RUN rm package-lock.json
RUN yarn add global npx
RUN apk add --no-cache tzdata sqlite-dev postgresql-dev mysql-dev 
RUN yarn
EXPOSE 3000
CMD ["sudo npx ts-node ","./src/app.ts"]
