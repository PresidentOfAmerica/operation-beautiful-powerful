FROM node:22-alpine AS runtime
WORKDIR /app
COPY package.json ./
COPY src ./src
EXPOSE 8080
ENV NODE_ENV=production
CMD ["node", "src/server.js"]
