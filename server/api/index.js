const router = require("express").Router();

router.use("/clients", require("./clients"));
router.use("/skills", require("./skills"));
router.use("/clientSkills", require("./clientSkills"));

module.exports = router;
