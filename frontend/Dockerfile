FROM node:20

WORKDIR /app/

COPY ./package.json ./package.json

RUN npm install

COPY . .

ENV NEXT_PUBLIC_API_URL=http://localhost:8000

RUN npm run build -- --no-lint

CMD [ "npm", "start" ]