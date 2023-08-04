const mysql = require('mysql2');
const dotenv = require("dotenv")

dotenv.config()
const db = mysql.createConnection({
  host: process.env.DB_HOST_SLAVE,
  user: process.env.DB_USERNAME_SLAVE,
  password: process.env.DB_PASSWORD_SLAVE,
  database: process.env.DB_NAME_SLAVE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL Slave database');
});

module.exports = db