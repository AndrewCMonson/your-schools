import mongoose from 'mongoose';

const schoolsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    phone: {
        type: String,
    },
    website: {
        type: String,
    },
    email: {
        type: String,
    },
    rating: {
        type: Number,
    },
    offers_daycare: {
        type: Boolean,
    },
    age_range: {
        type: Array,
    },
    early_enrollment: {
        type: Boolean,
    },
    min_tuition: {
        type: Number,
    },
    max_tuition: {
        type: Number,
    },
    days_open: {
        type: Array,
    },
    days_closed: {
        type: Array,
    },
    opening_hours: {
        type: String,
    },
    closing_hours: {
        type: String,
    },
    min_enrollment: {
        type: Number,
    },
    max_enrollment: {
        type: Number,
    },
    min_student_teacher_ratio: {
        type: Number,
    },
    max_student_teacher_ratio: {
        type: Number,
    },
});

const School = mongoose.model('school', schoolsSchema);

export default School;