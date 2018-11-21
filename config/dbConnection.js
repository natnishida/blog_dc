const mysql = require('mysql');
const connMySQL = function(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'blogdc'
  });
}

module.exports = function () {
  return connMySQL;
}
