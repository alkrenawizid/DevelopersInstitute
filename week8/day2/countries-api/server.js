const exp = require('express');
const env = require('dotenv');
const cors = require('cors');
const DB = require('./modules/db');

env.config();

const app = exp();

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Port = ${process.env.PORT}`);
})

app.get('/countries', (req,res) => {
    DB.getCountries()
    .then(coutries => {
        res.json(coutries)
    })
    .catch()
})