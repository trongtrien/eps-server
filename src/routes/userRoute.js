var router = require("express").Router();
const useCtrl = require('../models/useModel')
const userMiddleware = require('../middleware/users.js');

router.get('/getUser', userMiddleware.isLoggedIn, useCtrl.getUser)
router.post('/sign-up', userMiddleware.validateRegister, useCtrl.addUse)
router.post('/login', useCtrl.logidIn)
router.get('/secret-route', userMiddleware.isLoggedIn, useCtrl.secret)

module.exports = router;