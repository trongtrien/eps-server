const db = require('../../config/Db_config')
var router = require("express").Router();

const CourseCtrl = {
    // get All data
    getAll:(req,res)=>{
        db.query("SELECT * FROM courseviews", (err,result)=>{
            if(err) {console.log(err)} 
            res.send(result)
            }) 
    },
    
    // get data by id
    getById:(req,res)=>{
        const id = req.params.id;
        db.query("SELECT * FROM courseviews WHERE id = ?", id, (err,result)=>{
          if(err) {console.log(err) } 
          res.send(result)
          }) 
    },
    // update by id
    putById:(req, res) => {
        const id = req.params.id;
        db.query("UPDATE courseviews SET pageview = pageview + 1 WHERE id = ?",[id],(err, result) => {
            if(err) {console.log(err)}
            res.send(result)
            console.log(result)
            })
    }
    
}

router.get('/courseviews', CourseCtrl.getAll)
router.get('/courseviews/:id', CourseCtrl.getById)
router.put('/courseviews/:id', CourseCtrl.putById)

module.exports = router
