const db = require('../../config/Db_config')

const lessonPracticeCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM lessonpractice", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM lessonpractice WHERE prac_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    // get data by chapter
    getByChapter:(req,res)=>{
        const chapter = req.params.chapter;
        db.query("SELECT * FROM lessonpractice WHERE chapter = ?", chapter, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const answer = req.body.answer
        const prac_id = req.body.prac_id
        const chapter = req.body.chapter
        db.query("INSERT INTO lessonpractice (answer, prac_id,chapter) VALUES (?,?,?)",
                                      [answer,prac_id,chapter],
                                      (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const id = req.params.id
        const answer = req.body.answer
        db.query("UPDATE lessonpractice SET answer = ? WHERE id = ?",[answer, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM lessonpractice WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = lessonPracticeCtrl