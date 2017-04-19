const pg = require('pg');

let config = {
    host: '192.168.99.100',
    port: 5432,
    user: 'postgres',
    password: 'password',
    max: 10,
    idleTimeoutMillis: 30000,
}

const pool = new pg.Pool(config);
pool.on('error', function(err, client) {
    
});

module.exports.query = function(text, values, callback) {
    console.log("query:", text, values);
    return pool.query(text, values, callback);
};
