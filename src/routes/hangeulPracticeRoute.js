var router = require("express").Router()
const hangeulPracticeCtrl = require('../models/hangeulPracticeModel')

router.get('/hangeulPractice', hangeulPracticeCtrl.getAll)
router.post('/hangeulPractice', hangeulPracticeCtrl.postItem)
router.put('/hangeulPractice/:id', hangeulPracticeCtrl.putById)
router.delete('/hangeulPractice/:id', hangeulPracticeCtrl.deleteById)
router.get('/hangeulPractice/:id', hangeulPracticeCtrl.getById)

module.exports = router
