const {Router} = require("express");
const router = Router();

// GET
router.get("/",require("../controller/category/renderAllCategory"))
router.get("/add", require("../controller/category/renderAddCategoryPage"));
router.get("/delete/:id", require("../controller/category/deleteCategory"));
router.get("/edit/:id", require("../controller/category/renderEditCategoryPage"));

// POST
router.post("/add", require("../controller/category/addCategory"));
router.post("/edit/:id", require("../controller/category/updateCategory"));


module.exports = router;