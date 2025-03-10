# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose the port for Storybook
EXPOSE 6006

# Start Storybook
CMD ["npx", "storybook", "dev", "-p", "6006", "--no-open"]