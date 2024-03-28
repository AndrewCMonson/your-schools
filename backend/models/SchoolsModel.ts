import { Schema, Types, model } from "mongoose";

interface Image {
  url: string;
  alt: string;
  owner: Types.ObjectId;
}

const imageSchema = new Schema<Image>({
  url: {
    type: String,
  },
  alt: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
});

interface Schools {
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  latitude: number;
  longitude: number;
  phone: string;
  website: string;
  email: string;
  description: string;
  rating: number;
  offers_daycare: boolean;
  age_range: Array<string>;
  early_enrollment: boolean;
  min_tuition: number;
  max_tuition: number;
  days_open: Array<string>;
  days_closed: Array<string>;
  opening_hours: string;
  closing_hours: string;
  min_enrollment: number;
  max_enrollment: number;
  min_student_teacher_ratio: number;
  max_student_teacher_ratio: number;
  images: Array<Image>;
}

const schoolsSchema = new Schema<Schools>({
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
    type: [String],
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
    type: [String],
  },
  days_closed: {
    type: [String],
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

const School = model("school", schoolsSchema);

export { School, schoolsSchema };
