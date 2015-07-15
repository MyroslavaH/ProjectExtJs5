var path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    autoIncrement = require('mongoose-auto-increment');

// Routes
var configDB = require('./config/database.js');

// configuration ===============================================================
var connection = mongoose.connect(configDB.url); // connect to our database
autoIncrement.initialize(connection);

// set up our express application
app.set('view engine', 'jade'); // set up ejs for templating

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(session({ secret: '1234567890qwerty' })); // session secret
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// routes ======================================================================

if (process.env.NODE_ENV === 'production') {
    console.log('Production');
    app.use(express.static(path.join(__dirname, 'public')));
} else {
    console.log('Development');
    app.use(express.static(path.join(__dirname, '..', 'frontend')));
}

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(port);
console.log('The magic happens on port ' + port);


