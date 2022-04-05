FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod

FROM nginx:latest
COPY --from=node /app/dist/streaming-platform /usr/share/nginx/html
EXPOSE 80