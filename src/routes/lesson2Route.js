var router = require("express").Router()
const lesson2Ctrl = require('../models/lesson2Model')

router.get('/Lesson2', lesson2Ctrl.getAll)
router.post('/Lesson2', lesson2Ctrl.postItem)
router.put('/Lesson2/:id', lesson2Ctrl.putById)
router.delete('/Lesson2/:id', lesson2Ctrl.deleteById)
router.get('/Lesson2/:id', lesson2Ctrl.getById)

module.exports = router
