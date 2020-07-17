import { Router } from 'express';
const router = Router();

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller';
import multer from '../libs/multer';

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto) //se usa la opción single porque es un archuvo a la vez en caso de que ser más hay que cambiar de método

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router;