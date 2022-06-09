const db = require('../../config/Db_config')

const hangeulPracticeCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM hangeul_practice", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM hangeul_practice WHERE prac_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const answer = req.body.answer
        const prac_id = req.body.prac_id
        const dntitle = req.body.dntitle
        db.query("INSERT INTO hangeul_practice (answer, prac_id, dntitle) VALUES (?,?,?)",
                                      [answer,prac_id, dntitle],
                                      (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const id = req.params.id
        const answer = req.body.answer
        db.query("UPDATE hangeul_practice SET answer = ? WHERE id = ?",[answer, id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM hangeul_practice WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = hangeulPracticeCtrl