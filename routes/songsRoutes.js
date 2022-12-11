import express from 'express';
import {storeSongs,getAllSongs,addSong,child, getRecommendedSongs} from '../controller/songsController.js';

const router=express.Router()

router.route('/save').post(storeSongs)
router.route('/songs').get(getAllSongs)
router.route('/addsong').post(addSong)
router.route('/child').post(child)
router.route('/recommendation').post(getRecommendedSongs)


export default router

