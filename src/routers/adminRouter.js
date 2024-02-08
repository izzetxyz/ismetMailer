const router = require('express').Router();
const adminController = require('../controllers/adminController');
const validetorMiddleware = require('../middlewares/validationMiddleware');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

/*get*/   
router.get('/', authMiddleware.oturumAcilmis, adminController.showHomePage);
router.get('/sifredegistir',authMiddleware.oturumAcilmis,adminController.sifreDegistir)
router.get('/logout',authMiddleware.oturumAcilmis,adminController.logout)



router.post('/sendMail', authMiddleware.oturumAcilmis,adminController.sendMail)
router.post('/sifreDegistir',authMiddleware.oturumAcilmis,adminController.sifreDegistirPost)


module.exports = router;