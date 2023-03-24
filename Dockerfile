# Stage 1 (Compile and Build angular codebase)

# Use official node image as the base image
FROM node:latest as node
# set the working directory
WORKDIR /app
# add app files
COPY . .
# install app dependencies
#COPY package*.json ./
#RUN npm install -g @angular/cli@14.2.6
RUN npm install --legacy-peer-deps
# build the app
RUN npm run build --prod

#stage 2 (Serve app with nginx server)

# Use official nginx image as the base image
FROM nginx:latest
# for routing
COPY default.conf /etc/nginx/conf.d
# Copy the build output to replace the default nginx contents.
COPY --from=node /app/dist/standard-template /usr/share/nginx/html
# Expose port
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]
