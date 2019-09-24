const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '106.10.52.220',    // 호스트 주소
  user     : 'jngsoo',           // mysql user
  password : 'jngsoo2933',       // mysql password
  database : 'mydb'         // mysql 데이터베이스
});
module.exports = connection