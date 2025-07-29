# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /service

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy service files
COPY . .

# Expose API port
EXPOSE 4000

# Start the service
CMD ["yarn", "start"]
