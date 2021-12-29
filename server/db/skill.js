const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const conn = require("./conn");

const Skill = conn.define("skill", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Skill;
