var Connection = require('tedious').Connection;

var config = {

    "server": "127.0.0.1",
    "authentication": {
    "type": "default",
  
       "options": {
        "userName": "sa",
        "password": "1327"

    }},

    "options": {
    "port": 1433,
    "database": "vendasx",
    "trustServerCertificate": true,
    
 }
}

var connection = new Connection(config);
connection.on('connect', function(err) {
  if (err) {
  console.log(err);
  throw err
} 
 console.log('Connected to SQL Server');
});
connection.connect()