import express from 'express';
import {storeSongs} from '../controller/songsController.js';

const router=express.Router()

router.route('/save').post(storeSongs)

export default router

