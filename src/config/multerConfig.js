
const multer = require('multer');
const path = require('path');
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/uploads/images'))
    },
    filename: (req, file, cb) => {

        cb(null, 'carrage_'+Date.now()+(Math.random() * 100)+path.extname(file.originalname));
    }
});

const resimFileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };



const uploadResim = multer({storage:myStorage, fileFilter: resimFileFilter});

module.exports = uploadResim;