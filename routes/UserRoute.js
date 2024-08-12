const express = require('express');
const { register, login, logout } = require('../controllers/User');

const UserRouter = express.Router();

UserRouter.post('/signup',register);
UserRouter.post('/login', login);
UserRouter.post('/logout', logout);

module.exports = UserRouter;
