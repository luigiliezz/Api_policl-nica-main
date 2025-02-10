import mysql from 'mysql2/promise';
const pool = mysql.createPool({
host : 'localhost',
user : 'root',
password : 'lulu0112',
database : 'clinica'
});

export default pool;

