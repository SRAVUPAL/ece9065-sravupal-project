const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

/*
* Reference: "https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/"
*/

// create express app
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.get('/jokes/random', (req, res) => {
    request(
      { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("DB connection success");
}).catch(err => {
    console.log('DB connection failed', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ message: "Project" });
});

require('./app/routes/admin.js')(app);
require('./app/routes/guest.js')(app);
require('./app/routes/user.js')(app);

// listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});





