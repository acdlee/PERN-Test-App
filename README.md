![image](https://github.com/user-attachments/assets/ae0082b5-4f58-4b0f-a3d5-6edb979c205d)
# PostreSQL | Express.js | React.js | Node.js - Test Application
A PERN stack application skeleton.

## Description
A skeleton of an application using **PostgreSQL (database)**, **Express (backend)**, **React (frontend)**, and **Node.js (runtime environment)**.
The purpose of this application is to offer a relatively simple demonstration of the PERN stack.
The application itself displays three holidays in a React component, fetched from an Express API, which queries data from a PostreSQL database.

## Setup
### Database
Download and install <a href="https://www.postgresql.org/download/">PostreSQL</a>. No need to setup StackBuilder (just close the install wizard).

Launch pgAdmin and take note of your username, password, and port number. 

Create a new database called 'test', create a table called 'testdata', and run the following queries:\
``
CREATE TABLE testData (
  id SERIAL PRIMARY KEY,
	name VARCHAR(45)
);
``

Then import the CSV file from this repo into the testData table.

Test this worked by viewing all rows (you might need to refresh Tables).

### Backend
Clone the repo locally and navigate to the 'backend' directory. Install dependecies: \
``$npm i``

Then install the development dependencies: \
``$npm i --save-dev dotenv nodemon``

Create a .env file in the root of the backend directory with the environment variables PG_USER, PG_PASS, and PG_PORT using values from the previous section. Add one last environment variable PORt=3000.

Startup the backend with the following command: \
``$npm run dev``

### Frontend
Navigate to the frontend/test-fullstack-app directory and install dependencies (same command as previous section). Do not install the development dependencies from the previous section.

Create a .env file at the root of the frontend/test-fullstack-app directory with the following environment variable: \
``VITE_API_URL=http://localhost:3000/api/data``

Then startup the frontend (again, same command as the previous section).

### Result
You should see Christmas, Halloween, and Easter on http://localhost:5173.

## What's Next?
For this repo, the next step is to containerize the application with Docker. The end result will (hopefully) spin-up the entire application with just a ``docker-compose up`` command.
