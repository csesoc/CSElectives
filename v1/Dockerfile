# Grab the Node base image
FROM node:16.8.0

# Copy package.json into the container
COPY package.json ./

# Install node modules inside the container using the copied package.json
RUN yarn install

# Copy the entire project into the container
COPY . .

# Build yarn
RUN yarn build

# Expose the port to the outside world
EXPOSE 8080

# Run the server
RUN npm install -g serve
ENTRYPOINT serve -l 8080 -s build
