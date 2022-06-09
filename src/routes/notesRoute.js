var router = require("express").Router()
const notesCtrl = require('../models/notesModel')

router.get('/notes', notesCtrl.getAll)
router.get('/notes/:id', notesCtrl.getById)
router.post('/notes', notesCtrl.postItem)
router.put('/notes/:id', notesCtrl.putById)
router.delete('/notes/:id', notesCtrl.deleteById)

module.exports = router
