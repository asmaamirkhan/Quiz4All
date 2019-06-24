let modules = require('./common_modules');
let mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'quiz4all'
});

connection.connect(function (err) {
    if (err) {
        return res.json(modules.error_func('Database error', 511, req.body));
    }
    console.log('Connected');
});

module.exports = {
    connection
};
