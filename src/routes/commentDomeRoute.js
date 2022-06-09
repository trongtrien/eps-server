const db = require('../../config/Db_config')
var router = require("express").Router();

const CourseCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM comment", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },

    // Create comment
    postComment: async (req,res)=>{
        const username = req.body.username
        const message = req.body.message
        const createAt = req.body.createAt
        const sex = req.body.sex
        db.query("INSERT INTO comment (username, message, createAt, sex) VALUES (?,?,?,?)",
                [username, message, createAt, sex],
                (err,result)=>{
           if(err) { res.send({ message: err.sqlMessage })}
           res.send(result)
           })
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM comment WHERE id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    // update by id
    putById:(req, res) => {
        const id = req.params.id;
        db.query("UPDATE comment SET pageview = pageview + 1 WHERE id = ?",[id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            console.log(result)
            })
    }
    
}

router.post('/comment', CourseCtrl.postComment)
router.get('/comment', CourseCtrl.getAll)
router.get('/comment/:id', CourseCtrl.getById)
router.put('/comment/:id', CourseCtrl.putById)

module.exports = router
