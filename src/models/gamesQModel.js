const db = require('../../config/Db_config')

const gamesQCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM gamesQ", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM gamesQ WHERE game_id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    
    // Create post
    postItem: async (req,res)=>{
        const game_id = req.body.game_id
        const answer = req.body.answer
        const question = req.body.question
        const description = req.body.description
        const audio = req.body.audio
        const disableQ = req.body.disableQ
        const disabled = req.body.disabled
        db.query("INSERT INTO gamesQ (game_id, question, answer,description, audio, disableQ,disabled) VALUES (?,?,?,?,?,?)",
                [game_id, question,answer,description, audio,disableQ,disabled],
                (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // update by id
    putById:(req, res) => {
        const game_id = req.body.game_id
        const answer = req.body.answer
        const disableQ = req.body.disableQ
        db.query("INSERT INTO gamesQ (game_id, answer, disableQ) VALUES (?,?,?)",[game_id, answer,disableQ], (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },

    // delete by id
    deleteById:(req,res)=>{
        const id = req.params.id;
        db.query("DELETE FROM gamesQ WHERE id= ?", id, (err,result)=>{
            if(err) {console.log(err)}
            res.send(result)
            })
    },

    // 
    
}

module.exports = gamesQCtrl