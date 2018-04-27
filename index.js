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

console.log('index __dirname', __dirname);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/robots',robots);

app.use('/',router);
// define the home page route
router.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
// define the about route
router.post('/processRobotData', function (req, res) {
  
  console.log(req.body.info);
  if (req.body.info && req.body.info !== '') {
    const cleanData = cleaner.cleanUserInput(req.body.info);
    console.log('Our cleanData: ', cleanData);
    cleanData.forEach((item) => {
      if (executer[item] && executer[item](item)) {
        executer[item](item);
      } else {
        
      }
      
    });
    
  } else {
    
  }
  
  res.send('Done...');
});


app.listen(port, () => console.log('App listening on port ',port));
