FROM alpine:3.7

ENV MOUNTEBANK_VERSION=1.14.1
RUN apk add --update nodejs
RUN npm install -g mountebank@${MOUNTEBANK_VERSION} --production
RUN npm install -g newman

COPY . /home/www

EXPOSE 2525
EXPOSE 4545

ENTRYPOINT ["mb"]
CMD ["--logfile=./tmp/mb.log", "--pidfile=./tmp/mb.pid", "--configfile=./imposters.json", "--allowInjection", "--loglevel=debug"]
