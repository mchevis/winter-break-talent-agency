const faker = require("faker");
const conn = require("./conn");
const Client = require("./client");
const Skill = require("./skill");

// model relationships
Client.belongsToMany(Skill, {
  through: "clientSkills",
  as: "skills",
  foreignKey: "skillId",
});
Skill.belongsToMany(Client, {
  through: "clientSkills",
  as: "clients",
  foreignKey: "clientId",
});

//seeding
const syncAndSeed = async () => {
  await conn.sync({ force: true });

  const clients = new Array(5).fill("").map((_) => {
    return {
      name: faker.name.firstName(),
    };
  });
  await Promise.all(clients.map((cl) => Client.create(cl)));

  const skills = ["Dancing", "Singing", "Drawing", "Coding"];
  await Promise.all(skills.map((sk) => Skill.create({ name: sk })));

  console.log(`


    Seeding successful!


  `);
};

module.exports = {
  conn,
  syncAndSeed,
  models: {
    Client,
    Skill,
  },
};
