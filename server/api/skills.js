const router = require("express").Router();
const { Skill, Client } = require("../db").models;

// GET /api/skills
router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Skill.findAll({
        include: [{ model: Client, as: "clients" }],
        order: [["name", "ASC"]],
      })
    );
  } catch (error) {
    next(error);
  }
});

// GET /api/skills/:id
router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Skill.findOne({
        where: { id: req.params.id },
        include: [{ model: Client, as: "clients" }],
      })
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/skills/:id
router.put("/:id", async (req, res, next) => {
  try {
    const skill = await Skill.findOne({
      where: { id: req.params.id },
      include: [{ model: Client, as: "clients" }],
    });
    await skill.updateName(req.body.newName);
    res.send(skill);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
