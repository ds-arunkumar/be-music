# Music Streaming Application called "Music"

Music is Music Streaming App that allows user to create music and share with the other users. Users can also comment and like the music.

## Features:

- Create Music
- Share Music
- Comment on Music
- Like Music

## Technologies used:

- React
- NodeJs + ExpressJS
- MongoDB

## Setup Instruction

1. Database setup  
   (If local DB is used)
   - install MongoDB Community Server
   - install MongoDB Compass
   - Create a new database called 'Music'
   - Create a new collections called 'users'
   - Create a new collections called 'posts'
   - Create a new collections called 'comments'
   - Create a new collections called 'likes'

(If Atlas DB is used)

- Visit http://www.mongodb.com/cloud/atlas
- Create a new cluster
- Create a new database called 'Music'
- Create a new collections called 'users'
- Create a new collections called 'posts'
- Create a new collections called 'comments'
- Create a new collections called 'likes'

2. Server setup

   - Create a new respository called "be-music"
   - Initialize a new NodeJS project
     To initialize package.json without any prompts, run the following command:

   ```bash
   npm init -y or npm init
   ```

   or

   To initialize package.json with prompts, run the following command:

   ```bash
   npm init
   ```

   - Install the following dependencies:
     - express
     - mongoose
     - cors
     - dotenv
     - nodemon (dev dependency)
     - morgon (dev dependency)
     - jsonwebtoken
     - bcrypt
     - multer
     - cloudinary

- To install the dependencies, run the following command:

```bash
npm install express mongoose cors dotenv nodemon morgan jsonwebtoken bcrypt multer cloudinary
```

- Create a new file called '.env' and add the following environment variables:

```bash
PORT:3001
MONGODB_URI=mongodb://localhost:27017/music
JWT_SECRET=secret
```

- Create a new file called 'server.js'
  - Database connection setup
  - Express server setup
  - Middleware setup - cors, express.json, morgan, authentication
  - Routes setup
  - Controller setup
  - Model setup
  - Error handling setup
- Following the MVC architecture, create the following folders:
  - controllers
  - models
  - routes

3. Client setup

   - Create a new repository called "fe-music"
   - Initialize a new React project

To create a new React project, run the following command:

```bash
npm create vite@latest fe-music
```

- Install the following dependencies:
  - react-router-dom
  - axios
  - react-icons
  - react-toastify
  - tailwindcss
  - @headlessui/react
  - @heroicons/react
- To install the dependencies, run the following command:

```bash
npm install react-router-dom axios react-icons react-toastify tailwindcss @headlessui/react @heroicons/react
```
