const mysql = require('mysql2');

require('dotenv').config();

// Create a connection pool to the MySQL database
const poolMatindok = mysql.createPool({
    host: process.env.DATABASE_HOST, // Replace with your database host
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,     // Replace with your database user
    password: process.env.DATABASE_PASSWORD, // Replace with your database password
    database: process.env.DATABASE_MATINDOK, // Replace with your database name
});

module.exports = { poolMatindok };