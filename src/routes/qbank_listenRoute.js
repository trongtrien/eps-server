var router = require("express").Router();
const Qbank_listenCtrl = require('../models/qbank_listenModel')

router.get('/Qbank_listen', Qbank_listenCtrl.getAll)
router.post('/Qbank_listen', Qbank_listenCtrl.postItem)
router.put('/Qbank_listen/:id', Qbank_listenCtrl.putById)
router.delete('/Qbank_listen/:id', Qbank_listenCtrl.deleteById)
router.get('/Qbank_listen/:id', Qbank_listenCtrl.getById)
module.exports = router