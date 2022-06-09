var router = require("express").Router()
const gamesACtrl = require('../models/gamesAModel')

router.get('/gamesA', gamesACtrl.getAll)
router.post('/gamesA', gamesACtrl.postItem)
router.put('/gamesA/:id', gamesACtrl.putById)
router.delete('/gamesA/:id', gamesACtrl.deleteById)
router.get('/gamesA/:id', gamesACtrl.getById)

module.exports = router
