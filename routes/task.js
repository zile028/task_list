const { Router } = require("express");
const router = Router();
// GET
router.get("/all", require("../controller/task/renderAllTaskPage"));
router.get("/add", require("../controller/task/renderAddTaskPage"));
router.get("/status", require("../controller/task/changeStatus"));
router.get("/edit/:id", require("../controller/task/renderEditTaskPage"));
router.get("/category/:id", require("../controller/task/renderAllTaskByCategory"));
router.get("/delete/:id", require("../controller/task/deleteTask"));

//POST
router.post("/add", require("../controller/task/addTask"));
router.post("/edit/:id", require("../controller/task/updateTask"));

module.exports = router;
