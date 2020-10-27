# Pragma Brewery

## A beer refrigerator temperature monitoring system.
#
## Assumptions
- The temperature sensor service is up and running
- A fancy UI is not expected
#
## Folder Structure Overview
```
.
+-- api (backend)
|   +-- Dockerfile
|   +-- ...config
|   +-- src
+-- client (frontend)
|   +-- Dockerfile
|   +-- ...config
|   +-- src
+-- docker-compose.yml
```

## Solution Design
The project consists of two projects. One handles the backend part and tries to provide APIs which are needed for the client to show the list of beers and also push the notification with new beers' temperature via socket.io with the configurable background job. and the other one is responsible to handle the UI, show the list of beers, listen to the socket pushes and highlight the beers' status.

## Todo
- More unit-tests in the front-end
- Make the components more efficient
- Clean up test libraries
- Make configuration useable in the prod environment
- Add a test coverage in the frontend
- Make the error handling better (.e.g if socket gets down)
- Enhance the UI
- Clean up packages


## How to run
### Single command
#### Depandancies
- docker version 19.03.8
- docker-compose version 1.25.5

Run the following command in the root folder:
```
docker-compose up --build
```

Open http://localhost:3000 to view it in the browser.
And the API documentation is available on http://localhost:8088/api-docs.
### Run Individually

#### Depandancies

- node version v12.19.0
- yarn version 1.22.10

Run the following command in the ./api folder:
```
yarn install && yarn start
```
The API service runs on http://localhost:8088

And run the following command in the ./client folder:
```
yarn install && yarn dev
```
The UI runs on http://localhost:3000

#

## Available scripts in the api project
#### Depandancies
```
yarn install
```
Run the following command in the ./api folder:
Running the unit-tests

```
yarn test
```
The test coverage result
```
yarn test:coverage
```
Format, Lint
```
yarn lint
```
```
yarn lint:fix
```
```
yarn format
```
Production build, serve
```
yarn build
```
```
yarn serve
```
```
yarn serve:prod
```

## Available scripts in the client project
Run the following command in the ./client folder:
Running the unit-tests

```
yarn test
```
Production serve
```
yarn start
```

## Frameworks and Libraries
In the backend: NodeJS, express, babel, nodemon, swagger-ui-express, axios, mocha, chai, sinon

In the frontend: React, Redux, babel, webpack, jest, enzyme, node-sass