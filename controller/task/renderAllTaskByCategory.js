const pool = require("../../config/connection");

const renderAllTaskByCategory = async (req, res, next) => {
	let values = { categoryID: req.params.id };
	let sql =
		"SELECT t.*, c.categoryName, c.color AS categoryColor, p.priorityName, p.color AS priorityColor FROM task t JOIN category c ON c.id = t.categoryID JOIN priority p ON p.id = t.priorityID WHERE categoryID = :categoryID";
	try {
		let [tasks] = await pool.execute({ sql, values });
		console.log(tasks);
		res.render("allTaskByCategory", { tasks });
	} catch (error) {
		next(error);
	}
};
module.exports = renderAllTaskByCategory;
