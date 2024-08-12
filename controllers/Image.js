const multer = require('multer');
const path = require('path');
const Image = require('../models/Image');
const Folder = require('../models/Folder');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Upload Image
exports.uploadImage = async (req, res) => {
  const { name, folderId } = req.body;
  try {
    const folder = await Folder.findOne({ _id: folderId, user: req.user._id });
    if (!folder) return res.status(400).json({ message: 'Folder not found' });

    const image = new Image({
      name,
      imagePath: req.file.path,
      folder: folderId,
      user: req.user._id
    });
    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(400).json({ message: 'Error uploading image' });
  }
};

// Search Images
exports.searchImages = async (req, res) => {
  const { name } = req.query;
  try {
    const images = await Image.find({
      name: { $regex: name, $options: 'i' },
      user: req.user._id
    });
    res.json(images);
  } catch (err) {
    res.status(400).json({ message: 'Error searching images' });
  }
};

// Export multer instance for use in routes
exports.upload = upload;
