let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12609609',
    password: 'Ds7isUcZkc',
    database: 'sql12609609'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  

    console.log('Connected to the MySQL server.');
  
   
    //     var sql = "CREATE TABLE post (postrId int PRIMARY KEY AUTO_INCREMENT , title varchar(255) NOT NULL , content varchar(255) NOT NULL , imageUrl varchar(255) , createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP)";
    //     connection.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log("Table created");
    
    //   });
})

module.exports= connection;