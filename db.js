var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ch-01'
});

conn.connect(function(err){
    if (err) throw err;
    console.log('Database is Connected successfully!');
});

module.exports = conn;