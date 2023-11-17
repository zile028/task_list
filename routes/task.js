const {Router} = require("express");
const router = Router();
// GET
router.get("/add", require("../controller/task/renderAddTaskPage"));

//POST
router.post("/add", require("../controller/task/addTask"));

module.exports = router;