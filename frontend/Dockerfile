FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d
RUN mkdir /app
WORKDIR /app

RUN mkdir /app/build

COPY conf /etc/nginx
COPY ./build ./build

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
