var router = require("express").Router()
const lessonCommentCtrl = require('../models/lessonCommentsModel')

router.get('/lesson_comments', lessonCommentCtrl.getAll)
router.get('/lesson_comments/:id', lessonCommentCtrl.getById)
router.post('/lesson_comments', lessonCommentCtrl.postItem)
router.put('/lesson_comments/:id', lessonCommentCtrl.putById)
router.put('/lesson_comments/like/:id', lessonCommentCtrl.putLiked)
router.delete('/lesson_comments/:id', lessonCommentCtrl.deleteById)

module.exports = router
