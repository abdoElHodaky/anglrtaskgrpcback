FROM node:16-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache tzdata  sqlite-dev postgresql-dev mysql-dev protobuf protobuf-dev 
RUN rm -rf package-lock.json 
RUN yarn add ts-proto @grpc/grpc-js class-transform class-transformer class-validator paytabs_pt2 @grpc/proto-loader @grpc/reflection express-jwt
#RUN yarn add common-errors @types/common-errors express-rate-limit
#RUN yarn add @types/express @decorators/server  @decorators/di
#RUN yarn add @types/cors @decorators/express mysql2
RUN yarn install -y
ENV GRPCPORT 3030
ENV GRP_CPORT 50051
ENV PORT 4000
EXPOSE ${GRPCPORT} ${GRP_CPORT} ${PORT}
CMD ["sh","./tsrun.sh"]

