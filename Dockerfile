#use node
FROM node:14 as build

#set work directory in container
WORKDIR /app

COPY package*.json ./

#install dependencies
RUN npm install

#copy all other into container
COPY . .

#make build our app
RUN npm run build

#add nginx for our production
FROM nginx:1.21-alpine

#copy folder build to nginx observed folder
COPY --from=build /app/build /usr/share/nginx/html

#open port for nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]