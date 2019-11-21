FROM node:8

COPY dist ./

RUN npm i -g serve

CMD ["serve", "-s", ".", "-l", "16940"]
