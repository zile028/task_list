const pool = require("../../config/connection");
const updateCategory = async (req, res, next) => {
    let values = {...req.body, ...req.params};
    let sql = "UPDATE category SET categoryName = :categoryName, color = :color WHERE id = :id";
    try {
        let [result] = await pool.execute({sql, values});
        console.log(result);
        res.redirect("/config");
    } catch (error) {
        next(error);
    }
};

module.exports = updateCategory;