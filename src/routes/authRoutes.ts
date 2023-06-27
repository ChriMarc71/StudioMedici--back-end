import * as express from 'express';
import  login  from '../controllers/auth/authLoginController';
import  register  from '../controllers/auth/authRegisterController';
import  resetPassword  from '../controllers/auth/authResetPasswordController';
import  forgottenPassword  from '../controllers/auth/authForgottenPasswordController';

const router = express.Router();

router.get('/login', login);
router.post('/register', register);
router.put('/forgottenPassword', forgottenPassword);
router.put('/resetPassword', resetPassword);

export default router;
