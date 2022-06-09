const db = require('../../config/Db_config')

const Qbank_readCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM questionsbank_read", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM questionsbank_read WHERE prac_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const answer = req.body.answer
        const prac_id = req.body.prac_id
        db.query("INSERT INTO questionsbank_read (answer, prac_id) VALUES (?,?)",[answer,prac_id], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const answer = req.body.answer
        const id = req.body.id
        db.query("UPDATE questionsbank_read SET answer = ?, WHERE id = ?",[answer, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM questionsbank_read WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = Qbank_readCtrl