const router = require("express").Router();

router.use("/api", require("./api"));
router.use("/", require("./home"));

module.exports = router;
