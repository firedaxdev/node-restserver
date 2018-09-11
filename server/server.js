require('./config/config')

const express = require('express')
const app = express()
const mongoose = require('mongoose')




// parse application/json


app.use(require('./routes/usuario'))

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Bases de Datos ONLINE');
});