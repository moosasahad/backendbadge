const express = require('express')
const logincontroller = require('../controller/logincontroller')

const router = express.Router()

router
    .post('/',logincontroller.logincntrller)
    .post('/signup',logincontroller.signup)



module.exports=router    