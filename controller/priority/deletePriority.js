const pool = require("../../config/connection");
const deletePriority = async(req, res, next) => 
{
    let values = {...req.params};
    let query = ["DELETE FROM task WHERE task.priorityID = :id", "DELETE FROM priority WHERE id =:id"];

    try 
    {
        query.forEach(async(sql) => {
            let [result] = await pool.execute({sql, values});
           
        })
        res.redirect(req.headers.referer);
        
    } catch (error) {
        next(error);
    }
}

module.exports = deletePriority;