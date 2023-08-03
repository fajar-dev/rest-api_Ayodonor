const express = require('express');
const dotenv = require("dotenv")

// import routes
const Routes = require("./app/routes")

const app = express();

//dotenv (.env) config
dotenv.config()



// //routes middleware
app.use("/api", Routes)

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});