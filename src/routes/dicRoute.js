var router = require("express").Router();
const DicCtrl = require('../models/dicModel')

router.get('/Dic', DicCtrl.getAll)
router.get('/Dic/Chapter:chapter', DicCtrl.getByChapter)
router.get('/Dic/:id', DicCtrl.getById)
router.post('/Dic', DicCtrl.postItem)
router.put('/Dic/:id', DicCtrl.putById)
router.delete('/Dic/:id', DicCtrl.deleteById)
module.exports = router