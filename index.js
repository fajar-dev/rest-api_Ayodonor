const express = require('express');

const app = express();

app.listen(4000, () => {
  console.log('Server is running at http://localhost:4000');
});