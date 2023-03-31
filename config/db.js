

var mysql = require('mysql');

    var connection  = mysql.createPool({
        host     : 'sql12.freesqldatabase.com',
        database : 'sql12609609',
        user     : 'sql12609609',
        password : 'Ds7isUcZkc'
    });
    for (var i=0; i<connection.length;i++) {
        connection.getConnection(function(err, on) {
          on.query( 'INSERT INTO ...', function(err, rows) {
            on.release();
          });
        });
    }

    module.exports= connection;