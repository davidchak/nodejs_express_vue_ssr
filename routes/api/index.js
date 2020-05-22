const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json({ msg: "api v1" });
});

module.exports = router;
