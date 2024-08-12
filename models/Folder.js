const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String,
     required: true 
    },
  parent: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Folder'
 },
  user: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
     required: true }
});

module.exports = mongoose.model('Folder', folderSchema);
