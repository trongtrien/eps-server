const db = require('../../config/Db_config')

const progressCtrl = {
    // get All data
    getAll: async (req,res)=>{
        db.query("SELECT * FROM progress", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById: async (req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM progress WHERE userId = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const userId = req.body.userId
        const course_id = req.body.course_id
        db.query("INSERT INTO progress (userId, course_id) VALUES (?,?)",[userId,course_id], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById: async (req, res) => {
        const id = req.params.id
        const progress = req.body.progress
        db.query("UPDATE progress SET progress = ? WHERE id = ?",[progress, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // reset by id
    reset: async (req,res)=>{
        const id = req.params.id
        db.query("UPDATE progress SET progress = 0 WHERE id = ?",[id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    }
    
}

module.exports = progressCtrl