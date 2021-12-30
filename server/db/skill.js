const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const conn = require("./conn");

const Skill = conn.define("skill", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

Skill.prototype.updateName = function (newName) {
  try {
    return this.update(
      {
        name: newName,
      },
      { where: { id: this.id } }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = Skill;
