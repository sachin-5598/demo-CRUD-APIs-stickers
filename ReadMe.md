# Demo Node.js Express JSON API - CRUD Stickers

## We will be using:
  * Postgres for our database (using Docker)
  * knex.js for our database migrations, seeds and queries
  * express.js for our JSON routes
  * Mocha, Chai and SuperTest to test our routes

## DB design
![alt](https://lucid.app/publicSegments/view/36247a7a-70dd-407a-b8d4-a0998c20f188/image.png)

## Server Check List
* [x] Create a server folder
  * [x] Generate express app
    * Install
      * express
      * morgan
      * compression
      * helmet
      * cors
      * nodemon
    * Setup error handlers
  * [x] Setup database
    * Create docker-compose.yml
  * [x] Initialize knex
    * Install
      * knex
      * pg
      * dotenv
    * Create knexfile.js
    ```sh
    npx knex init
    ```
  * [x] Create migrations
    ```sh
    asdsd
    npx knex migrate:make initial
    ```
  * [x] Create seeds
    ```sh
    npx knex seed:make 01-initial
    ```
* [x] Create a api folder
  * [x] Create/Mount a router for all sticker table api
* [x] Create APIs
  * Create a connection file for the app 
  * Create a query folder
  * [x] Setup Tests
    * Install
      * mocha
      * chai
      * supertest
    * Add a test database connection
    * Create a test folder
    * Add npm test script
      * Set NODE_ENV=test
    * Create before() function
      * Rollback all migration on the test DB
      * Run fresh migrations/seeds on test DB
  * [x] List all records with GET /api/v1/stickers
    * Create route
    * Create query
    * Add tests
  * [x] Show one record with GET /api/v1/stickers/:id
    * Create route
    * Validate id middleware
    * Create query
    * Add tests
  * [x] Create a record with POST /api/v1/stickers
    * Create route
    * Validate body middleware
    * Create query
    * Add tests
  * [x] Update a record with PUT /api/v1/stickers/:id
    * Create route
    * Validate id middleware
    * Validate body/updates middleware
    * Create query
    * Add tests
  * [x] Delete a record with DELETE /api/v1/stickers/:id
    * Create route
    * Validate id middleware
    * Create query
    * Add tests
