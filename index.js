const express = require('express');
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

// import routes
const kontakRoutes = require("./routes/kontakRoute")

const app = express();
const port = 4000

//dotenv (.env) config
dotenv.config()

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// //routes middleware
app.use("/api", kontakRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});