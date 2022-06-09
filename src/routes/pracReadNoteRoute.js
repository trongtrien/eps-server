var router = require("express").Router()
const pracReadNoteCtrl = require('../models/pracReadNoteModel')

router.get('/readnotes', pracReadNoteCtrl.getAll)
router.get('/readnotes/:id', pracReadNoteCtrl.getById)
router.post('/readnotes', pracReadNoteCtrl.postItem)
router.put('/readnotes/:id', pracReadNoteCtrl.putById)
router.delete('/readnotes/:id', pracReadNoteCtrl.deleteById)

module.exports = router
