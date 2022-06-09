const db = require('../../config/Db_config')

const practiceListenCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM practice_listen", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM practice_listen WHERE id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const title = req.body.title
        const videoURL1 = req.body.videoURL1
        const content = req.body.content
        db.query("INSERT INTO practice_listen (title, videoURL1, content) VALUES (?,?,?)",[title,videoURL1,content], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const title = req.body.title
        const videoURL1 = req.body.videoURL1
        const content = req.body.content
        db.query("INSERT INTO practice_listen (title, videoURL1, content) VALUES (?,?,?)",[title, videoURL1,content], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM practice_listen WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = practiceListenCtrl