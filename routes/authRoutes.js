import express from 'express';
import {register,login,updateUser} from '../controller/authController.js';

const router=express.Router()

router.route('/register').post(register)

router.route('/login').patch(login)

router.route('/updateUser').post(updateUser)

export default router

