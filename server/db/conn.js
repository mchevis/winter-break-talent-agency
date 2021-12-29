const Sequelize = require("sequelize");
const conn = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://localhost:5432/winter-break-acme-talent",
  {
    logging: false,
  }
);

module.exports = conn;
