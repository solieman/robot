const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const routs = require("./routes/index");
const robots = require("./routes/robots");
const cleaner = require("./lib/clean");

const port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/robots',robots);
app.use('/',routs);




app.listen(port, () => console.log('App listening on port ',port));
