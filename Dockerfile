FROM node:24

WORKDIR /app

RUN apt-get update && apt-get install -y default-mysql-client

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
