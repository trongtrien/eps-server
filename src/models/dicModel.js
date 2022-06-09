const db = require('../../config/Db_config')

const DicCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM dic", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM dic WHERE lesson_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },

    // get data by chapter
    getByChapter:(req,res)=>{
        const chapter = req.params.chapter;
        db.query("SELECT * FROM dic WHERE chapter = ?", chapter, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const chapter = req.body.chapter
        const lesson_id = req.body.lesson_id
        const word = req.body.word
        const vieMean = req.body.vieMean
        const audio = req.body.audio
        const description = req.body.description
        db.query("INSERT INTO dic (chapter,word, lesson_id, vieMean, audio, description) VALUES (?,?,?,?,?,?)",[chapter,word,lesson_id, vieMean, audio, description], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const id = req.body.id
        const word = req.body.word
        const vieMean = req.body.vieMean
        const audio = req.body.audio
        const description = req.body.description
        db.query("UPDATE dic SET answer = ?, word = ?, vieMean = ?, audio = ?, description = ? WHERE id = ?",[answer, word, vieMean, audio, description, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM dic WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = DicCtrl