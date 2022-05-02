FROM node:14.17.1-alpine3.13 AS node
WORKDIR /app
COPY . .
RUN npm install --save --legacy-peer-deps
RUN npm ci
RUN npm run build --prod

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/streaming-platform /usr/share/nginx/html
EXPOSE 80