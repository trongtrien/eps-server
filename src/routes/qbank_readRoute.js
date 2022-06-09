var router = require("express").Router();
const Qbank_readCtrl = require('../models/qbank_readModel')

router.get('/Qbank_read', Qbank_readCtrl.getAll)
router.post('/Qbank_read', Qbank_readCtrl.postItem)
router.put('/Qbank_read/:id', Qbank_readCtrl.putById)
router.delete('/Qbank_read/:id', Qbank_readCtrl.deleteById)
router.get('/Qbank_read/:id', Qbank_readCtrl.getById)
module.exports = router