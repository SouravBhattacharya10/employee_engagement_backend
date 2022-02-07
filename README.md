# employee_engagement_backend
To run the app:
yarn start

When connecting with node gives error like:
Client does not support authentication protocol requested by server; consider upgrading MySQL client

Execute the following query in MYSQL:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

After this, run:
flush privileges;

Change the config.json with following appropriate data.

To restore mysql database backup file, create an empty database inside MySQL terminal:
create database hackathon


Outside MySQL terminal
mysql -u root -p hackathon < hackathon.sql

To test API in postman:
To get all employees:
GET http://localhost:8850/employees

To login:
POST http://localhost:8850/login

Request Body:
{
    "email": "test2admin@condenast.com",
    "password": "password"
}