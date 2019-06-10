const mysql = require('mysql'); 

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S2NT2m2r2d0n2..',
    database: 'company',
    socketPath: ''
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else {
        console.log('DB is conected');
    }
});

module.exports = mysqlConnection;