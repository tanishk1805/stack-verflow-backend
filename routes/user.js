import express from 'express'
import{login,signup} from '../controllers/user.js'
import { getAllUsers, updatedProfile } from '../controllers/suser.js';
import auth from '../middlewares/auth.js';

const router=express.Router();

router.post('/login',login);
router.post('/signup',signup);
router.get('/getAllUsers',getAllUsers);
router.patch('/updateProfile/:id',auth,updatedProfile);

export default router;