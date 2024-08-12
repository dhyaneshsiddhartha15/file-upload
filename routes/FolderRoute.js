const express = require('express');
const { addFolder, listFolder } = require('../controllers/Folder');
const isAuthenticated = require('../middlewares/isAuthenticated');
const folderRouter = express.Router();

folderRouter.post('/folders', isAuthenticated, addFolder);
folderRouter.get('/folders',isAuthenticated, listFolder);

module.exports = folderRouter;
