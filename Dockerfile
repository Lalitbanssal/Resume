# ==========================================
# STAGE 1: Build the Next.js application
# ==========================================
# We match the Node version you are using locally (v22)
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the code and build the project
COPY . .
RUN yarn build

# ==========================================
# STAGE 2: Run the production server
# ==========================================
FROM node:22-alpine AS runner
WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Koyeb will look for
EXPOSE 3000

# Start the Next.js production server
CMD ["yarn", "start"]