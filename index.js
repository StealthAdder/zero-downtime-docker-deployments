'use strict';
const os = require('os');
const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    name: "NodeJS",
    date: new Date()
  });
});

app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});
