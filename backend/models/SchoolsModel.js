import mongoose from 'mongoose';

const imageSchema = mongoose.Schema({
	url: {
		type: String,
	},
	alt: {
		type: String,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'School',
	}
});

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
	latitude: {
		type: Number,
	},
	longitude: {
		type: Number,
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
	description: {
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
	images: [imageSchema],
});

const School = mongoose.model('school', schoolsSchema);

export { School, schoolsSchema }