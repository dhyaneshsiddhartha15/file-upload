const express = require('express');
const { uploadImage, searchImages, upload } = require('../controllers/Image');
const authMiddleware = require('../middlewares/isAuthenticated');
const Imagerouter = express.Router();
Imagerouter.use(authMiddleware);
Imagerouter.post('/upload', upload.single('image'), uploadImage);
Imagerouter.get('/search', authMiddleware,searchImages);

module.exports = Imagerouter;
