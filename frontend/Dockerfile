FROM node:18

WORKDIR /app
COPY package*.json ./

RUN npm install @nx/nx-linux-arm64-gnu
RUN npm install

ADD . .

CMD ["npm", "start"]
