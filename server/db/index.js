const faker = require("faker");
const conn = require("./conn");
const Client = require("./client");
const Skill = require("./skill");
const ClientSkills = require("./clientSkills");

// model relationships
Client.belongsToMany(Skill, {
  through: "clientSkills",
});
Skill.belongsToMany(Client, {
  through: "clientSkills",
});

Client.hasMany(ClientSkills);
ClientSkills.belongsTo(Client);

Skill.hasMany(ClientSkills);
ClientSkills.belongsTo(Skill);

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

  await ClientSkills.create({ clientId: 2, skillId: 1 });

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
    ClientSkills,
  },
};
