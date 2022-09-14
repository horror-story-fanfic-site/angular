FROM node:latest as node
WORKDIR /angular
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /angular/dist/social-media-angular /usr/share/nginx/html