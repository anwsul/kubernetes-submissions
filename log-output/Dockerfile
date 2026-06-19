FROM node:alpine
RUN adduser -D scriptRunner
USER scriptRunner
COPY script.js .
ENTRYPOINT ["node", "script.js"]

