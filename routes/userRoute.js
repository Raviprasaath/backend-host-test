const express = require('express');

const route = express.Router();

const { userRegister, userLogin, getCurrentUser } = require("../controllers/userController");
const validateToken = require('../middleware/validateTokenHandler');

route.post('/register', userRegister)
route.post('/login', userLogin)

route.get('/current', validateToken, getCurrentUser)


module.exports = route;