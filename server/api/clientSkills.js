const router = require("express").Router();
const { ClientSkills } = require("../db").models;

// POST /api/clientSkills
// PUT /api/skills/:id
router.post("/", async (req, res, next) => {
  try {
    await ClientSkills.create({
      clientId: req.body.clientId,
      skillId: req.body.skillId,
    });
    res.sendStatus(204); //dont know the right status
  } catch (error) {
    next(error);
  }
});

module.exports = router;
