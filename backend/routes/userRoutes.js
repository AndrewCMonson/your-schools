import express from 'express';
const router = express.Router();
import {
    getUsers,
    getUserById,
    addToFavorites,
    getUserFavorites
} from '../controllers/userControllers.js';

router.route('/').get(getUsers);
router.route('/:id').get(getUserById);
router.route('/:id/favorites/:schoolId').put(addToFavorites);
router.route('/:id/favorites').get(getUserFavorites);

export default router;