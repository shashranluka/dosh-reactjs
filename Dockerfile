# Use the latest LTS version of Node.js
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Create a production build
RUN npm run build

# Use nginx to serve the application
FROM nginx:stable-alpine

# Copy the build results to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Add nginx configuration to support React Router
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose the port your app runs on
EXPOSE 80

# Define the command to run your app
CMD ["nginx", "-g", "daemon off;"]
