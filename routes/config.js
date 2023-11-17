const {Router} = require("express");
const router = new Router();

// GET
router.get("/", require("../controller/config/renderConfigPage.js"));

// POST

module.exports = router;
