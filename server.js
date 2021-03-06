const express = require('express');
require('dotenv').config();

const app = express();

app.get('/public', function(req, res) {
    res.json({
        message: "Hello from public  API"
    });
});

app.get('/private', function(req, res) {
    res.json({
        message: "Hello from a Private API"
    });
});

app.listen(3001);
console.log('API Server listenign on ' + process.env.REACT_APP_AUTH0_AUDIENCE);
