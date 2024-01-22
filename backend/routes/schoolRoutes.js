import express from 'express';
const router = express.Router();
import {
    getSchools,
    getSchoolById,
} from '../controllers/schoolsControllers.js';

router.route('/').get(getSchools);
router.route('/:id').get(getSchoolById);

export default router;