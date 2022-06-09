var router = require("express").Router()
const practiceReadCtrl = require('../models/practiceReadModel')

router.get('/Practice-read', practiceReadCtrl.getAll)
router.post('/Practice-read', practiceReadCtrl.postItem)
router.put('/Practice-read/:id', practiceReadCtrl.putById)
router.delete('/Practice-read/:id', practiceReadCtrl.deleteById)
router.get('/Practice-read/:id', practiceReadCtrl.getById)

module.exports = router
