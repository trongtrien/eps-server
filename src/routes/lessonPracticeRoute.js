var router = require("express").Router()
const lessonPracriceCtrl = require('../models/lessonPracticeModel')

router.get('/lessonPracrice', lessonPracriceCtrl.getAll)
router.get('/lessonPracrice/Chapter:chapter', lessonPracriceCtrl.getByChapter)
router.get('/lessonPracrice/:id', lessonPracriceCtrl.getById)
router.post('/lessonPracrice', lessonPracriceCtrl.postItem)
router.put('/lessonPracrice/:id', lessonPracriceCtrl.putById)
router.delete('/lessonPracrice/:id', lessonPracriceCtrl.deleteById)

module.exports = router
