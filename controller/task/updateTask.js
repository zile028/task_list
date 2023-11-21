const pool = require("../../config/connection");

const updateTask = async (req, res, next) => {
    console.log("radi");
    let values = {...req.params, ...req.body};
    let sql = "UPDATE task SET "+
             "task=:task, "+
             "description=:description, "+
             "deadline =:deadline, "+
             "categoryID =:categoryID, "+
             "priorityID =:priorityID "+
             "WHERE id =:id";

             try 
             {
                let [result] = await pool.execute({sql, values});
                res.redirect("/task/all");
             } catch (error) {
                next(error);
             }
} ;

module.exports = updateTask;