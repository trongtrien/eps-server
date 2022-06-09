var router = require("express").Router();
const epsinfoCtrl = require('../controlers/epsinfoCtrl')

router.get('/epsinfo', epsinfoCtrl.getEpsInfo)
router.post('/epsinfo', epsinfoCtrl.postEpsInfo)
router.put('/epsinfo/:id', epsinfoCtrl.putEpsInfo)
router.put('/epsinfo/view/:id', epsinfoCtrl.addpageView)
router.delete('/epsinfo/:id', epsinfoCtrl.deleteEpsInfo)
router.get('/epsinfo/:id', epsinfoCtrl.findEpsInfoById)
module.exports = router