const { Router } = require("express");
const router = new Router();

router.get("/", require("../controller/config/renderConfigPage.js"));

module.exports = router;
