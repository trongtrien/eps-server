var router = require("express").Router();
const db_connect = require("../../config/Db_config");
const ExamsCtrl = require('../models/examsModel')
const userMiddleware = require('../middleware/users.js');

router.get('/Question', ExamsCtrl.getAll)
router.post('/Question',userMiddleware.isLoggedIn, ExamsCtrl.postItem)
router.put('/Question/:id', ExamsCtrl.putById)
router.delete('/Question/:id', ExamsCtrl.deleteById)
router.get('/Question/:id', ExamsCtrl.getById)

router.get('/ques/:id', (rep, res) => {
    let id = rep.params.id
    db_connect.query(`SELECT * FROM employee WHERE manager_id = ${id}`, (err, resuilt) =>{
        if(err){
            console.log(err)
        } else {
            res.send(resuilt)
        }
    })
})
module.exports = router