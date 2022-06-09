const db = require('../../config/Db_config')

const hangeulCtrl = {
    // get All data
    getAll: async (req,res)=>{
        db.query("SELECT * FROM hangeul", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById: async (req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM hangeul WHERE prac_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const title = req.body.title
        const videoURL1 = req.body.videoURL1
        const videoURL2 = req.body.videoURL2
        const content = req.body.content
        db.query("INSERT INTO hangeul (title, videoURL1, videoURL2, content) VALUES (?,?,?,?)",[title,videoURL1, videoURL2,content], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById: async (req, res) => {
        const id = req.params.id
        const title = req.body.title
        const videoURL = req.body.videoURL
        const content = req.body.content
        db.query("UPDATE hangeul SET title = ?, videoURL = ?, content = ? WHERE id = ?",[title, videoURL, content, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById: async (req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM hangeul WHERE id= ?", id, (err,result)=>{
            if (result.affectedRows == 0) {
        console.log("error: ");

              } else res.send({ message: `Lesson was deleted successfully` });
            })
    }
    
}

module.exports = hangeulCtrl