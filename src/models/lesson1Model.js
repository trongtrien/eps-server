const db = require('../../config/Db_config')

const lesson1Ctrl = {
    // get All data
    getAll: async (req,res)=>{
        db.query("SELECT * FROM lesson1", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById: async (req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM lesson1 WHERE id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const title = req.body.title
        const videoURL1 = req.body.videoURL1
        const videoURL2 = req.body.videoURL2
        const part1 = req.body.part1
        const part2 = req.body.part2
        db.query("INSERT INTO lesson1 (title, videoURL1, videoURL2, part1, part2) VALUES (?,?,?,?,?)",[title,videoURL1, videoURL2, part1, part2], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById: async (req, res) => {
        const id = req.params.id
        const title = req.body.title
        const videoURL1 = req.body.videoURL1
        const videoURL2 = req.body.videoURL2
        const part1 = req.body.part1
        const part2 = req.body.part2
        db.query("UPDATE lesson1 SET title = ?, videoURL1 = ?,videoURL2 = ?, part1 = ?, part2 = ? WHERE id = ?",[title, videoURL1, videoURL2, part1, part2, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById: async (req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM lesson1 WHERE id= ?", id, (err,result)=>{
            if (result.affectedRows == 0) {
        console.log("error: ");

              } else res.send({ message: `Lesson was deleted successfully` });
            })
    }
    
}

module.exports = lesson1Ctrl