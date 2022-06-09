var router = require("express").Router()
const pracListenCommentCtrl = require('../models/pracListenCommentModel')

router.get('/prac_listen_comments', pracListenCommentCtrl.getAll)
router.post('/prac_listen_comments', pracListenCommentCtrl.postItem)
router.put('/prac_listen_comments/:id', pracListenCommentCtrl.putById)
router.put('/prac_listen_comments/like/:id', pracListenCommentCtrl.putLiked)
router.delete('/prac_listen_comments/:id', pracListenCommentCtrl.deleteById)
router.get('/prac_listen_comments/:id', pracListenCommentCtrl.getById)

module.exports = router
