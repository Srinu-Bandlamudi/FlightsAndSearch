# Welcome to Flight Service


# Project SetUp
- Clone the project on your local
- Execute `npm install` on the same path as of your roor directory of the
  downloaded project
- Create a `.env` file on the root directory and add the following environment variables
        - `PORT=3000`
- Inside the `src/config` folder create a file `config.json` and then
  add the following piece of json 

  ``` 
  {
  "development": {
    "username": "<YOUR_USER_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Serach_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 
}




  ```