FROM node:18-alpine

WORKDIR /frontend

COPY package.json /frontend/
COPY package-lock.json /frontend/
RUN npm install

COPY . /frontend/

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]