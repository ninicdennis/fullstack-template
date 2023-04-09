# Use an official Node.js base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the application code to the container
COPY . .

# Expose the Next.js application port
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["yarn", "run", "dev"]
