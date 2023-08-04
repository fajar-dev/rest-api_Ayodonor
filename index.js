const express = require('express');
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

// import routes
const route = require("./routes/route")

const app = express();
const port = 4000

//dotenv (.env) config
dotenv.config()

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// //routes middleware
app.use("/api", route)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});