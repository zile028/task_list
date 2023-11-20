const {Router} = require("express");
const router = Router();
// GET
router.get("/all", require("../controller/task/renderAllTaskPage"));
router.get("/add", require("../controller/task/renderAddTaskPage"));
router.get("/status", require("../controller/task/changeStatus"));
router.get("/edit/:id", require("../controller/task/renderEditTaskPage"));

//POST
router.post("/add", require("../controller/task/addTask"));

module.exports = router;