var router = require("express").Router()
const pracListenNoteCtrl = require('../models/pracListenNoteModel')

router.get('/listennotes', pracListenNoteCtrl.getAll)
router.get('/listennotes/:id', pracListenNoteCtrl.getById)
router.post('/listennotes', pracListenNoteCtrl.postItem)
router.put('/listennotes/:id', pracListenNoteCtrl.putById)
router.delete('/listennotes/:id', pracListenNoteCtrl.deleteById)

module.exports = router