const pool = require("../../config/connection");
const addTask = async (req, res, next) => {
    let values = req.body;
    let sql = "INSERT INTO task (task, description, deadline, categoryID, priorityID) " +
        "VALUES (:task, :description, :deadline, :categoryID, :priorityID)";
    try {
        let [result] = await pool.execute({sql, values});
        console.log(result);
        res.redirect("/");
    } catch (error) {
        next(error);
    }
};

module.exports = addTask;