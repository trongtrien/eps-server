var router = require("express").Router();
const blogCtrl = require('../controlers/blogCtrl')

router.get('/blog', blogCtrl.getblog)
router.post('/blog', blogCtrl.postblog)
router.put('/blog/view/:id', blogCtrl.addpageView)
router.put('/blog/:id', blogCtrl.putblog)
router.delete('/blog/:id', blogCtrl.deleteblog)
router.get('/blog/:id', blogCtrl.findblogById)
module.exports = router