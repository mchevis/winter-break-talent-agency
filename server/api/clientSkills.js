const router = require("express").Router();
const { ClientSkills, Skill } = require("../db").models;

// GET /api/clientSkills
router.get("/", async (req, res, next) => {
  try {
    res.send(await ClientSkills.findAll({ include: [Skill] }));
  } catch (error) {
    next(error);
  }
});

// POST /api/clientSkills
router.post("/", async (req, res, next) => {
  try {
    const clientSkill = await ClientSkills.create({
      clientId: req.body.clientId,
      skillId: req.body.skillId,
    });
    const resClientSkill = await ClientSkills.findOne({
      where: { id: clientSkill.id },
      include: [Skill],
    });
    res.send(resClientSkill);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/clientSkills/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const clientSkill = await ClientSkills.findByPk(req.params.id);
    clientSkill.destroy();
    res.send(clientSkill);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
