# Please make sure

# - you have added .env file along with mongodb url and port before trying to run project

# - mongodb is running locally if you are going to use this mongodb url

# - you have created supraDataTable database in your database

# - if you want you can make use of sample_data.json by importing it in mongodb collection

sample .env

MONGODB_URL=mongodb://localhost:27017
PORT=3005

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
