var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'mydbinstance.cslcbvxulvmd.us-east-2.rds.amazonaws.com',
    user     : 'root',
    password : 'password',
    database : 'lms'
});

module.exports = connection;