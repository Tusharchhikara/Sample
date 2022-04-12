FROM node:alpine
WORKDIR D:\Tushar SGT\Code\DevOps\docker project

COPY package*.json ./
RUN npm install 

COPY . .

EXPOSE 3000

CMD node server_init.js
