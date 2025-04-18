# Step 1: Use Node.js image
FROM node:18

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Step 4: Copy package.json and package-lock.json (if present) first to install dependencies.
# By copying these files before the rest of the application code, Docker can cache the npm install step.
# Hint: you can copy both files with one command! Remember .gitignore formatting, it's very similar.

# Step 5: Install npm dependencies.
# Use RUN to install the dependencies defined in package.json.

# Step 6: Copy the rest of the backend code into the container.
# This step copies all remaining files (including backend server files) into the working directory.

# Step 7: Expose the port the backend application will listen on.
# Typically, Express runs on port 5000 or any custom port you define in your code.

# Step 8: Create a volume to persist data that is shared with the host machine (optional).
# This can be used to persist database files, logs, or any other data.

# Step 9: Specify the default command to run your application when the container starts.
# This should usually run the Node.js app with `npm start`.

# Step 10: Expose the port and run the app
EXPOSE 3001
CMD ["node", "server.js"]
