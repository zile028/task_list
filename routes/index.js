const { Router } = require("express");
const router = Router();

router.get("/", require("../controller/home/renderHomePage.js"));
router.use("/config", require("./config.js"));

module.exports = router;
