var router = require("express").Router()
const progressCtrl = require('../models/progressModel')

router.get('/progress', progressCtrl.getAll)
router.post('/progress', progressCtrl.postItem)
router.put('/progress/:id', progressCtrl.putById)
router.put('/progress/reset/:id', progressCtrl.reset)
router.get('/progress/:id', progressCtrl.getById)

module.exports = router
