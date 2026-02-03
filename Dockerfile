# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Copy server file
COPY server.js ./

# Expose port (Cloud Run will set PORT env var)
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
