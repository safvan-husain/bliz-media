# Build stage
FROM node:20-slim AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build artifacts from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 4321
EXPOSE 4321

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
