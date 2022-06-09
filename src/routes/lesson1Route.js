var router = require("express").Router()
const lesson1Ctrl = require('../models/lesson1Model')

router.get('/Lesson1', lesson1Ctrl.getAll)
router.post('/Lesson1', lesson1Ctrl.postItem)
router.put('/Lesson1/:id', lesson1Ctrl.putById)
router.delete('/Lesson1/:id', lesson1Ctrl.deleteById)
router.get('/Lesson1/:id', lesson1Ctrl.getById)

module.exports = router
