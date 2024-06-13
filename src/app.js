"use strict";
const express = require("express");
const db = require("./database/models");
const routes = require('./routes');


const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);

db.sequelize.sync({ force: false }).then((req) => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
