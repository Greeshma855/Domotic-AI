import express from 'express';
import { registerUser, loginUser, googleAuth } from '../controllers/authController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-auth', authController.googleAuth);


export default router;