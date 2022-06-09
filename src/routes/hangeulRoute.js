var router = require("express").Router()
const hangeulCtrl = require('../models/hangeulModel')

router.get('/Hangeul', hangeulCtrl.getAll)
router.post('/Hangeul', hangeulCtrl.postItem)
router.put('/Hangeul/:id', hangeulCtrl.putById)
router.delete('/Hangeul/:id', hangeulCtrl.deleteById)
router.get('/Hangeul/:id', hangeulCtrl.getById)

module.exports = router
