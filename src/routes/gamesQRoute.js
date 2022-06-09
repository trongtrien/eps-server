var router = require("express").Router()
const gamesQCtrl = require('../models/gamesQModel')

router.get('/gamesQ', gamesQCtrl.getAll)
router.post('/gamesQ', gamesQCtrl.postItem)
router.put('/gamesQ/:id', gamesQCtrl.putById)
router.delete('/gamesQ/:id', gamesQCtrl.deleteById)
router.get('/gamesQ/:id', gamesQCtrl.getById)

module.exports = router
