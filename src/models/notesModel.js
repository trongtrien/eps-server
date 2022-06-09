const db = require('../../config/Db_config')

const notesCtrl = {
    // get All data
    getAll: async (req,res)=>{
        db.query("SELECT * FROM notes", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById: async (req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM notes WHERE lesson_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const lesson_id = req.body.lesson_id
        const userId = req.body.userId
        const title = req.body.title
        const message = req.body.message
        const startAt = req.body.startAt
        db.query("INSERT INTO notes (userId, lesson_id, title, message, startAt) VALUES (?,?,?,?,?)",
                [userId, lesson_id, title, message, startAt],
                (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById: async (req, res) => {
        const id = req.params.id
        const message = req.body.message
        db.query("UPDATE notes SET message = ? WHERE id = ?",[message, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById: async (req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM notes WHERE id= ?", id, (err,result)=>{
            if (result.affectedRows == 0) {
        console.log("error: ");

              } else res.send({ message: `Lesson was deleted successfully` });
            })
    }
    
}

module.exports = notesCtrl