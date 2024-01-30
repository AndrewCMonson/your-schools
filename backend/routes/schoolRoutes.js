import express from 'express';
const router = express.Router();
import {
    getSchools,
    getSchoolById,
    getAllSchools,
} from '../controllers/schoolsControllers.js';

router.route('/').get(getSchools);
router.route('/:all').get(getAllSchools);
router.route('/:id').get(getSchoolById);

export default router;