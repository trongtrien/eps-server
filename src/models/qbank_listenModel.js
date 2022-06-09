const db = require('../../config/Db_config')

const Qbank_listenCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM questionsbank_listen", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM questionsbank_listen WHERE prac_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const answer = req.body.answer
        const prac_id = req.body.prac_id
        db.query("INSERT INTO questionsbank_listen (answer, prac_id) VALUES (?,?)",[answer,prac_id], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const answer = req.body.answer
        const id = req.body.id
        db.query("UPDATE questionsbank_listen SET answer = ?, WHERE id = ?",[answer, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM questionsbank_listen WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = Qbank_listenCtrl