var router = require("express").Router()
const pracReadCommentCtrl = require('../models/pracReadCommentModel')

router.get('/prac_read_comments', pracReadCommentCtrl.getAll)
router.get('/prac_read_comments/:id', pracReadCommentCtrl.getById)
router.post('/prac_read_comments', pracReadCommentCtrl.postItem)
router.put('/prac_read_comments/:id', pracReadCommentCtrl.putById)
router.put('/prac_read_comments/like/:id', pracReadCommentCtrl.putLiked)
router.delete('/prac_read_comments/:id', pracReadCommentCtrl.deleteById)

module.exports = router
