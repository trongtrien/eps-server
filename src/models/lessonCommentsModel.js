const db = require('../../config/Db_config')

const lessonCommentCtrl = {
    // get All data
    getAll: async (req,res)=>{
        db.query("SELECT * FROM lesson_comments", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById: async (req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM lesson_comments WHERE lesson_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const id = req.body.id
        const lesson_id = req.body.lesson_id
        const username = req.body.username
        const userId = req.body.userId
        const parentId = req.body.parentId
        const message = req.body.message
        const createdAt = req.body.createdAt
        const sex = req.body.sex
        db.query("INSERT INTO lesson_comments (id, username, userId, parentId, lesson_id, message, createdAt,sex) VALUES (?,?,?,?,?,?,?,?)",
                [id, username, userId, parentId, lesson_id,message, createdAt,sex],
                (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById: async (req, res) => {
        const id = req.params.id
        const message = req.body.message
        db.query("UPDATE lesson_comments SET message = ? WHERE id = ?",[message, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // like id
    putLiked: async (req, res) => {
        const id = req.params.id
        db.query("UPDATE lesson_comments SET liked = liked + 1 WHERE id = ?",[id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById: async (req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM lesson_comments WHERE id= ?", id, (err,result)=>{
            if (result.affectedRows == 0) {
        console.log("error: ");

              } else res.send({ message: `Lesson was deleted successfully` });
            })
    }
    
}

module.exports = lessonCommentCtrl