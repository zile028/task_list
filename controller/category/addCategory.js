const pool = require("../../config/connection");
const addCategory = async (req, res, next) => {
    let values = req.body;
    let sql = `INSERT INTO category (categoryName, color)
               VALUES (:categoryName, :color)`;
    try {
        let newCategory = await pool.execute({sql, values});
        res.redirect("/category/add");
    } catch (error) {
        next(error);
    }

};

module.exports = addCategory;