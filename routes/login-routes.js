const express = require('express');
const { Login, Register, UserData } = require('../controllers/Login');
const auth = require('../middleware/auth')
const router = express.Router();
// login ,register ,update profile,apply job,delete account
router.post('/login',Login)
router.post('/register',Register)

router.get('/user',auth,UserData)




module.exports = {
    routes:router
}