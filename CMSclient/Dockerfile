# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
# Copy the rest of the application code to the working directory
COPY . .

# Install the app dependencies
RUN npm cache clean --force && npm install && npm run build && npm install -g serve

# Expose a port to access the web app (replace 3000 with the appropriate port if needed)
EXPOSE 3000

# Start the web app
CMD [ "serve", "-s", "dist" ]
