const {Router} = require("express");
const router = Router();

router.get("/", require("../controller/home/renderHomePage.js"));
router.use("/config", require("./config.js"));
router.use("/category", require("./category"));
router.use("/task", require("./task"));
router.use("/priority", require("./priority.js"));

module.exports = router;
