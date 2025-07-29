# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy application code
COPY . .

# Build and expose
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
