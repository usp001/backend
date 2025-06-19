require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQLHOST,
    dialect: "mysql",
    dialectOptions: {
    connectTimeout: 10000, 
  },
    port:process.env.MYSQLPORT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQLHOST,
    dialect: "mysql",
    dialectOptions: {
    connectTimeout: 10000, 
  },
    port:process.env.MYSQLPORT
  },
};
