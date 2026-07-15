# Base Image
FROM node:22

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]