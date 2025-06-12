// db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "3mttUser",
  password: "7896",
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
