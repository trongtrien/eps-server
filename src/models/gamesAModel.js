const db = require('../../config/Db_config')

const gamesACtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM gamesA", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM gamesA WHERE game_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const game_id = req.body.game_id
        const answer = req.body.answer
        const disableA = req.body.disableA
        const disabled = req.body.disabled
        db.query("INSERT INTO gamesA (game_id, answer, disableA,disabled) VALUES (?,?,?,?)",[game_id,answer,disableA,disabled], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const game_id = req.body.game_id
        const answer = req.body.answer
        const disableA = req.body.disableA
        db.query("INSERT INTO gamesA (game_id, answer, disableA) VALUES (?,?,?)",[game_id, answer,disableA], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM gamesA WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = gamesACtrl