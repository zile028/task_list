const pool = require("../../config/connection");
const dayjs = require("dayjs");
const renderEditTaskPage = async (req, res, next) => {
    let {id} = req.params;
    let sql = {
        task: "SELECT * FROM task WHERE id = :id",
        categories: "SELECT * FROM category",
        priorities: "SELECT * FROM priority"
    };
    let result = {};
    try {
        for (const sqlKey in sql) {
            let [data] = await pool.execute({sql: sql[sqlKey], values: {id}});
            result[sqlKey] = data;
        }
        res.render("editTaskPage", {...result, dayjs});
    } catch (error) {
        next(error);
    }
};

module.exports = renderEditTaskPage;