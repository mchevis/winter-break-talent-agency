const router = require("express").Router();
const { Client, Skill } = require("../db").models;

// GET /api/clients
router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Client.findAll({
        include: [{ model: Skill, as: "skills" }],
        order: [["name", "ASC"]],
      })
    );
  } catch (error) {
    next(error);
  }
});

// GET /api/clients/:id
router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Client.findOne({
        where: { id: req.params.id },
        include: [{ model: Skill, as: "skills" }],
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
