const knex = require('knex');

const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'root',
        database: 'countries'
    }
})

const getContries = () => {
    return db('country')
    .select('country_id','country')
    .orderBy('country')
}



module.exports = {
    getContries
}