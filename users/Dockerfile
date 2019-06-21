FROM node:10.16.0-alpine

COPY package.json package.json
RUN npm install

COPY src src
COPY .babelrc .babelrc
RUN npm run build \
  && rm -rf src


CMD ["node", "dist/index.js"]
