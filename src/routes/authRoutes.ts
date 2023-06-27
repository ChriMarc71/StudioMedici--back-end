mport * as express from 'express';
import { Router } from 'express';
import { authLoginController as login } from '../controllers/auth/authLoginController';
import { authRegisterController as register } from '../controllers/auth/authRegisterController';
import { authResetPasswordController as resetPassword } from '../controllers/auth/authResetPasswordController';
import { authForgottenPasswordController as forgottenPassword } from '../controllers/auth/authForgottenPasswordController';

const router: Router = express.Router();

router.get('/login', login);
router.post('/register', register);
router.put('/forgottenPassword', forgottenPassword);
router.put('/resetPassword', resetPassword);

export default router;
