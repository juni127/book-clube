# Use the official Node.js image as the base image
FROM node:24

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install the application dependencies
RUN npm ci

# Build the NestJS application
RUN npm run build -- --filter=api

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "apps/api/dist/main.js"]
