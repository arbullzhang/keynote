FROM node

LABEL Author="stone-jin"

COPY ./index.js /home
COPY ./package.json /home

WORKDIR /home

RUN npm install

EXPOSE 8000

ENTRYPOINT [ "node", "index.js" ]