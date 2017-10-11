let mysql = require('mysql');

let databaseConnection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'demo'
});

databaseConnection.query('SELECT * FROM Users', function (error, rows) {
  if(error) {
    console.log(error);
  } else {
    console.log("RESULTS:");
    console.log(rows);
    console.log(rows[2].firstname);
  }
});

databaseConnection.end(function(error) {
  console.log("TERMINATED DATABASE CONNECTION");
});
