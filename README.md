# Taxi247

> Easy and convinient BK-Test taxi services management.

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/download/).
- Install [Postgresql](https://www.postgresql.org/docs/9.3/tutorial-install.html)
- Install [postgis](https://postgis.net/install/) - A Spatial and Geographic objects for PostgreSQL

- An ERD of the system can be viewed [here](https://drive.google.com/file/d/15-PYykJzNgBFk29q3pRTO4UceBb0DNEp/view?usp=sharing)

## Environment Setup

1. git clone this repository && cd to the project directory
2. with postgres create a 2 databases : `one for test and another for development`
3. Add the postgis extension to the created databases: `create extension postgis;`
4. run `npm install` to install dependencies
5. create a `.env` file in the root project directory
6. copy the `.env.example` to the `.env` file and update it accordingly
7. run `npm run migrate` && `npm run seed` to create the schemas and seed
8. run `npm run test` to test the application unit tests

## Testing specific endpoints:

- Run the application with `npm run dev` 🚀

Click to [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14dde3cb05c0f432a5d1)

## Available API endpoints:

- Naviate to `http://localhost:3000/api/v1/api-docs/` on your browser after running the application
