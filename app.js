// Entrypoint of application

var express = require('express')

var app = express()

app.use(require('./routes'));

app.listen(4000, function() {
    console.log('Api running!')
})