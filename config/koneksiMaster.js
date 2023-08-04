const mysql = require('mysql2');
const dotenv = require("dotenv")

dotenv.config()
const db = mysql.createConnection({
  host: process.env.DB_HOST_MASTER,
  user: process.env.DB_USERNAME_MASTER,
  password: process.env.DB_PASSWORD_MASTER,
  database: process.env.DB_NAME_MASTER,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL Master database');
});

module.exports = db