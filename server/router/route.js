import { Router } from 'express';
import Auth, { localVariable } from '../middleware/Auth.js';
import { registerMail } from '../controllers/mailer.js';
const router = Router();

//import all controllers

import * as controller from '../controllers/appController.js';

//post

router.route('/register').post(controller.register);
router.route('/registerMail').post(registerMail); //send email
router
  .route('/authenticate')
  .post(controller.verifyUser, (req, res) => res.end);
router.route('/login').post(controller.verifyUser, controller.login);

//Get
router.route('/user/:username').get(controller.getUser);
router
  .route('/generateOTP')
  .get(controller.verifyUser, localVariable, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

//put- update
router.route('/updateUser').put(Auth, controller.updateUser); // update profile
router
  .route('/resetPassword')
  .put(controller.verifyUser, controller.resetPassword);

export default router;
