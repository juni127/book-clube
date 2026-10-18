# Use the official Node.js image as the base image
FROM node:24.15.0

# Set the working directory inside the container
WORKDIR /usr/src/repo

# Copy the application files
COPY . .

# Install the application dependencies
RUN npm ci

# Build the NestJS application
RUN npm run build -- --filter=api

# Expose the application port
EXPOSE 3000

# Set the working directory inside the app
WORKDIR /usr/src/repo/apps/api

# Command to run the application
CMD ["node", "dist/main.js"]
