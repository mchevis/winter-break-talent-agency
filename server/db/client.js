const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const conn = require("./conn");

const Client = conn.define("client", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Client;
