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
- Once you've added your db config as listed above,go to the `src` folder from your terminal
  and execute command `npx sequelize db:create`
  and then execute,

    `npx sequelize db:migrate `
```
## Db  Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A Flight belongs to an Airplane but one airplane can be used in multiple flights
  - A city has many airports but a airport belongs to one city
  - One airport can have many flights,but a flight belongs to one airport

##Tables

###City-> id,name,created_at,updated_at
###Airport->id,name,address,city_id,crreated_at,updated_at
    Relationship-->City has many Airports and Airpot belongs to a city(one to many)

    ```
      npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

    ```