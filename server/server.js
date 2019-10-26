const express = require('express');
const morgan = require('morgan');
const cheerio = require('cheerio');
const request = require('request-promise');
const app = express();

/*Settings*/
app.set('appName','Scraping Farmacy');
app.set('port', process.env.PORT || 3000);

/*Middlewares*/
app.use(express.json());
app.use(morgan('dev'));
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

/*Server*/
app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} backend server is running`);
    console.log(`Server on port ${app.get('port')}`);
});