const { Router } = require("express");
const router = Router();

router.get("/add", require("../controller/priority/renderAddPriorityPage"));
router.get("/edit/:id", require("../controller/priority/renderEditPriorityPage"));
router.get("/delete/:id", require("../controller/priority/deletePriority"));


//POST
router.post("/add", require("../controller/priority/addPriority"));
router.post("/edit", require("../controller/priority/updatePriority"));


module.exports = router;