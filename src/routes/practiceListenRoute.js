var router = require("express").Router()
const practiceListenCtrl = require('../models/practiceListenModel')

router.get('/Practice-listen', practiceListenCtrl.getAll)
router.post('/Practice-listen', practiceListenCtrl.postItem)
router.put('/Practice-listen/:id', practiceListenCtrl.putById)
router.delete('/Practice-listen/:id', practiceListenCtrl.deleteById)
router.get('/Practice-listen/:id', practiceListenCtrl.getById)

module.exports = router
