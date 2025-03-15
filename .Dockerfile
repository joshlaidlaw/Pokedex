FROM node:alpine AS builder

# Set the working directory for the build step
WORKDIR /usr/dist/pokedex

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the static website
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Set the working directory for the serving step
WORKDIR /usr/dist/pokedex

# Remove default Nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the builder stage
COPY --from=builder /usr/dist/pokedex/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]