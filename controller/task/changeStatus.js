const pool = require("../../config/connection");
const changeStatus = async (req, res, next) => {
	let done = parseInt(req.query.done);
	let id = parseInt(req.query.id);
	let sql = "UPDATE task SET done = :done WHERE id = :id";
	let values = { done, id };
	try {
		let [result] = await pool.execute({ sql, values });
		res.redirect(req.headers.referer);
	} catch (error) {
		next(error);
	}
};

module.exports = changeStatus;
