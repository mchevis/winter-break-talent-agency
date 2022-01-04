const Sequelize = require("sequelize");
const { INTEGER } = Sequelize.DataTypes;
const conn = require("./conn");

const ClientSkills = conn.define("clientSkills", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = ClientSkills;
