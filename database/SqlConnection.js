// Importing mssql module
var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: '123qwe',
    server: 'localhost', 
    database: 'NDISPROVIDER',
    trustServerCertificate: true,
};


sql.connect(config,function(err) {
    if (err) throw err;
    console.log("Connected!");
});
  
module.exports = sql;