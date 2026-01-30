FROM node:20-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the files
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Run in standalone mode
CMD ["node", ".next/standalone/server.js"]
