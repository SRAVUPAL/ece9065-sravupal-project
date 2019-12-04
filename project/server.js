const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

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
    res.json({message: "Project"});
});

require('./app/routes/admin.js')(app);
// require('./app/routes/guest.js')(app);
// require('./app/routes/user.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});