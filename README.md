# Welcome to Flight Service

## Project Setup

1. **Clone the project on your local machine**
   - Clone this repository: `[FlightsAndSearchService](https://github.com/Srinu-Bandlamudi/FlightsAndSearch)`
   - Clone the remaining services if needed:
     - [EmailReminderService](https://github.com/Srinu-Bandlamudi/EmailReminderService)
     - [Auth_Service](https://github.com/Srinu-Bandlamudi/Auth_Service)
     - [TicketBookingService](https://github.com/Srinu-Bandlamudi/TicketBookingService)
     - [API_Gateway](https://github.com/Srinu-Bandlamudi/API_Gateway)

2. **Install dependencies**
   - Execute `npm install` in the root directory of each service after cloning them.

3. **Environment Setup**
   - Create a `.env` file in the root directory and add the following environment variable:
     ```plaintext
     PORT=3000
     ```
   - Inside the `src/config` folder, create a file `config.json` with the following content:
     ```json
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

4. **Database Setup**
   - Once you've added your DB config as listed above, navigate to the `src` folder from your terminal and execute:
     ```bash
     npx sequelize db:create
     ```
   - Then, execute the migration command:
     ```bash
     npx sequelize db:migrate
     ```

## Database Design for FlightsAndSearch_Service

- **Tables:**
  - Airplane
  - Flight
  - Airport
  - City

- **Relationships:**
  - A Flight belongs to an Airplane, but one airplane can be used in multiple flights.
  - A city has many airports, but an airport belongs to one city.
  - One airport can have many flights, but a flight belongs to one airport.

### Table Schemas

- **City:**
  - `id`, `name`, `created_at`, `updated_at`

- **Airport:**
  - `id`, `name`, `address`, `city_id`, `created_at`, `updated_at`
  - Relationship: City has many Airports, and Airport belongs to a City (one-to-many).

  ```bash
  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
