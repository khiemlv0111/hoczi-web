
# 1. Choose base image
FROM node:20-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json to the workdir
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port
EXPOSE 8000

RUN npm run build

# 7. Start the application
CMD ["npm", "start"]


# docker build -t my-node-app .

# docker run -d -p 8000:8000 --name my-node-app my-node-app


# docker run -d -p 8888:8000 --name my-node-app my-node-app