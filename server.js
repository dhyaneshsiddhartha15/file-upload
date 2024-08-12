const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const UserRouter = require('./routes/UserRoute');
const folderRouter = require('./routes/FolderRoute');
const Imagerouter = require('./routes/ImageRoute');
const db = require("./config/database");
const app = express();
const PORT = process.env.PORT || 4000;

db.connect();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ...",
  });
});

app.use('/api/v1/user', UserRouter);
app.use('/api/v1/folder', folderRouter);
app.use('/api/v1/images', Imagerouter);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
