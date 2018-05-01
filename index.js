const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const router = express.Router();

// const routs = require("./routes/index");
const robots = require("./routes/robots");
const cleaner = require("./lib/clean");
const executer = require("./lib/execute");

const port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/robots',robots);

app.use('/',router);
// define the home page route
router.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
// define the about route
router.post('/processRobotData', clean, execute);


function clean(req,res,next) {
  console.log('clean');
  if (req.body.info && req.body.info !== '') {
    console.log('body info: ', req.body.info);
    const cleanData = cleaner.cleanUserInput(req.body.info);
    req.cleanData = cleanData.data;
    console.log('Our cleanData: ', cleanData.data);
    next();
  }
  
  next();
}

function execute(req,res) {
  console.log('execute',req.cleanData);
  if (req && req.cleanData) {
    const robotStatus = executer.executeValidData(req.cleanData);
    if(robotStatus){
      res.send(robotStatus);
    }
  } else {
    res.send('No valied...');
  }
  
}



app.listen(port, () => console.log('App listening on port ',port));
