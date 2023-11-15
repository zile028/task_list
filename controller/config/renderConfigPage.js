const pool = require("../../config/connection");

const renderConfigPage = async (req, res) => {
	let sqlCategory = "SELECT * FROM category";
	let sqlPriority = "SELECT * FROM priority";
	try {
		let [categoryes] = await pool.execute({ sql: sqlCategory });
		let [priorityes] = await pool.execute({ sql: sqlPriority });
		res.render("config", { categoryes, priorityes });
	} catch (error) {
		console.log(error);
	}
};
module.exports = renderConfigPage;
