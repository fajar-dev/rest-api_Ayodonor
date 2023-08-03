const express = require('express');
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

// import routes
const Routes = require("./app/routes")

const app = express();

//dotenv (.env) config
dotenv.config()

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// //routes middleware
app.use("/api", Routes)

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});