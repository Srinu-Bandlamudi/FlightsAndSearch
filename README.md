# Flight Service

## Related Services

This project is part of a larger microservices architecture. Each service in the ecosystem plays a crucial role in the overall functionality. Explore the related services:

### 🔗 [FlightsAndSearchService](https://github.com/Srinu-Bandlamudi/FlightsAndSearch)
### 🔗 [EmailReminderService](https://github.com/Srinu-Bandlamudi/EmailReminderService)
### 🔗 [Auth_Service](https://github.com/Srinu-Bandlamudi/Auth_Service)
### 🔗 [TicketBookingService](https://github.com/Srinu-Bandlamudi/TicketBookingService)
### 🔗 [API_Gateway](https://github.com/Srinu-Bandlamudi/API_Gateway)

---

## Table of Contents
- [Overview](#overview)
- [Project Setup](#project-setup)
- [Database Design](#database-design-for-flightsandsearch_service)
- [Service-Specific Configuration](#service-specific-configuration)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project is a **Flight Service** built using a microservices architecture. It is designed to manage flight searches, bookings, user authentication, and email reminders for upcoming flights. The project uses RabbitMQ for handling downtime of services and Axios for inter-service communication. Key features include:

- **Centralized API Handling**: The API Gateway service acts as a single entry point for client requests, implementing rate limiting and routing to the appropriate service.
- **Message Broker & Queue Management**: RabbitMQ ensures reliable message delivery between services, handling service downtime and ensuring eventual consistency.
- **Flight Search with Filters**: Allows users to search flights based on various filters like departure city, arrival city, date, and more.
- **Email Notifications**: Nodemailer is used for sending emails, with scheduled jobs (using Node-cron) to handle pending notifications.
- **Logging & Monitoring**: Morgan logger is integrated for detailed logging of service interactions.

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
