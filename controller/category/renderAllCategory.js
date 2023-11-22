const pool = require("../../config/connection");

const renderAllCategory = async (req, res, next) => {
	let sql =
		"SELECT c.*, COUNT(t.categoryID) AS numTask FROM category c " +
		"LEFT JOIN task t ON t.categoryID = c.id " +
		"GROUP BY t.categoryID";
	try {
		let [categories] = await pool.execute({ sql });
		res.render("allCategoryPage", { categories });
	} catch (error) {
		next(error);
	}
};
module.exports = renderAllCategory;
