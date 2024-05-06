import { images } from "./images.ts";

export const schools: {
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
  website: string;
  email: string;
  description: string;
  rating: number;
  offers_daycare: boolean;
  age_range: number[];
  early_enrollment: boolean;
  min_tuition: number;
  max_tuition: number;
  days_open: string[];
  days_closed: string[];
  opening_hours: string;
  closing_hours: string;
  min_enrollment: number;
  max_enrollment: number;
  min_student_teacher_ratio: number;
  max_student_teacher_ratio: number;
  images: {
    url: string;
    alt: string;
  }[];
}[] = [
  {
    name: "Emmanuel Episcopal Day School",
    address: "5181 Singleton Way",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23465",
    phone: "757-499-7393",
    website: "https://www.emmanueldayschoolvb.com",
    email: "EEDS@email.com",
    description:
      "Emmanuel Episcopal Day School is a private preschool in Virginia Beach, VA. It has 120 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 4.5,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 300,
    max_tuition: 750,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 50,
    max_enrollment: 100,
    min_student_teacher_ratio: 5,
    max_student_teacher_ratio: 10,
    images: images,
  },
  {
    name: "St. John the Apostle Catholic School",
    address: "1968 Sandbridge Rd",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23456",
    phone: "757-426-2180",
    website: "https://www.sjavb.org",
    email: "SJACS@email.com",
    description:
      "St. John the Apostle Catholic School is a private preschool in Virginia Beach, VA. It has 120 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 4,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 300,
    max_tuition: 1400,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 50,
    max_enrollment: 100,
    min_student_teacher_ratio: 5,
    max_student_teacher_ratio: 10,
    images: images,
  },
  {
    name: "St. Gregory the Great Catholic School",
    address: "5345 Virginia Beach Blvd",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23462",
    phone: "757-497-1811",
    website: "https://www.saintgregoryschool.org",
    email: "stgregs@gmail.com",
    description:
      "St. Gregory the Great Catholic School is a private preschool in Virginia Beach, VA. It has 50 students in grades PK, K with a student-teacher ratio of 5 to 1.",
    rating: 3.5,
    offers_daycare: false,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 300,
    max_tuition: 1100,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 25,
    max_enrollment: 50,
    min_student_teacher_ratio: 5,
    max_student_teacher_ratio: 5,
    images: images,
  },
  {
    name: "St. Matthew's School",
    address: "3316 Sandra Ln",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23464",
    phone: "757-420-2455",
    website: "https://www.smsvb.net",
    email: "stmatts@gmail.com",
    description:
      "St. Matthew's School is a private preschool in Virginia Beach, VA. It has 100 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 5,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 300,
    max_tuition: 1000,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 50,
    max_enrollment: 100,
    min_student_teacher_ratio: 5,
    max_student_teacher_ratio: 10,
    images: images,
  },
  {
    name: "Mary Magdalene Catholic School",
    address: "1232 Culver Ln",
    city: "Suffolk",
    state: "VA",
    zipcode: "23434",
    phone: "757-544-5182",
    website: "https://www.marymagschool.org",
    email: "preschool@marymagschool.org",
    description:
      "Mary Magdalene Catholic School is a private preschool in Suffolk, VA. It has 124 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 3.5,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: false,
    min_tuition: 175,
    max_tuition: 500,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "18:00:00",
    min_enrollment: 48,
    max_enrollment: 124,
    min_student_teacher_ratio: 8,
    max_student_teacher_ratio: 12,
    images: images,
  },
  {
    name: "Sunnydale Montessori Academy",
    address: "456 Oak St",
    city: "Suffolk",
    state: "VA",
    zipcode: "23323",
    phone: "757-555-1234",
    website: "https://www.sunnydalemontessori.org",
    email: "info@sunnydalemontessori.org",
    description:
      "Sunnydale Montessori Academy is a private preschool in Suffolk, VA. It has 120 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 4.0,
    offers_daycare: true,
    age_range: [2, 6],
    early_enrollment: true,
    min_tuition: 200,
    max_tuition: 550,
    days_open: ["Monday", "Wednesday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "09:00:00",
    closing_hours: "17:30:00",
    min_enrollment: 50,
    max_enrollment: 120,
    min_student_teacher_ratio: 7,
    max_student_teacher_ratio: 11,
    images: images,
  },
  {
    name: "Harmony Learning Center",
    address: "789 Maple Ave",
    city: "Suffolk",
    state: "VA",
    zipcode: "23323",
    phone: "757-555-5678",
    website: "https://www.harmonylearningcenter.com",
    email: "info@harmonylearningcenter.com",
    description:
      "Harmony Learning Center is a private preschool in Suffolk, VA. It has 100 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 4.2,
    offers_daycare: true,
    age_range: [1, 4],
    early_enrollment: false,
    min_tuition: 180,
    max_tuition: 520,
    days_open: ["Monday", "Wednesday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:00:00",
    closing_hours: "18:30:00",
    min_enrollment: 45,
    max_enrollment: 100,
    min_student_teacher_ratio: 6,
    max_student_teacher_ratio: 10,
    images: images,
  },
  {
    name: "Children's Harbor Learning Center",
    address: "1010 Main St",
    city: "Suffolk",
    state: "VA",
    zipcode: "23323",
    phone: "757-555-9101",
    website: "https://www.goddardschool.com",
    email: "contact@goddardschool.com",
    description:
      "The Goddard School is a private preschool in Suffolk, VA. It has 110 students in grades PK, K with a student-teacher ratio of 10 to 1.",
    rating: 4.8,
    offers_daycare: true,
    age_range: [2, 6],
    early_enrollment: true,
    min_tuition: 250,
    max_tuition: 700,
    days_open: ["Monday", "Wednesday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:00:00",
    closing_hours: "18:30:00",
    min_enrollment: 45,
    max_enrollment: 110,
    min_student_teacher_ratio: 6,
    max_student_teacher_ratio: 10,
    images: images,
  },
  {
    name: "Mount Trashmore KinderCare",
    address: "4300 Silverleaf Dr",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23462",
    phone: "757-499-7393",
    website: "https://www.kindercare.com",
    email: "contact@kindercare.com",
    description:
      "KinderCare Learning Center is a private preschool in Virginia Beach, VA. It has 80 students in grades PK, K with a student-teacher ratio of 6 to 1.",
    rating: 3.5,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 300,
    max_tuition: 750,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 50,
    max_enrollment: 100,
    min_student_teacher_ratio: 5,
    max_student_teacher_ratio: 6,
    images: images,
  },
  {
    name: "Great Bridge Kindercare",
    address: "929 Cedar Rd",
    city: "Chesapeake",
    state: "VA",
    zipcode: "23462",
    phone: "757-482-2213",
    website: "https://www.kindercare.com",
    email: "contact@kindercare.com",
    description:
      "KinderCare Learning Center is a private preschool in Chesapeake, VA. It has 75 students in grades PK, K with a student-teacher ratio of 8 to 1.",
    rating: 4.0,
    offers_daycare: true,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 450,
    max_tuition: 875,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 25,
    max_enrollment: 75,
    min_student_teacher_ratio: 6,
    max_student_teacher_ratio: 8,
    images: images,
  },
  {
    name: "Guidepost Montessori at Redmill",
    address: "2177 Upton Dr",
    city: "Virginia Beach",
    state: "VA",
    zipcode: "23462",
    phone: "757-550-2022",
    website: "https://www.guidepostmontessori.com",
    email: "contact@guidepostmontessori.com",
    description:
      "Guidepost Montessori is a private preschool in Virginia Beach, VA. It has 50 students in grades PK, K with a student-teacher ratio of 3 to 1.",
    rating: 5.0,
    offers_daycare: false,
    age_range: [2, 5],
    early_enrollment: true,
    min_tuition: 500,
    max_tuition: 1200,
    days_open: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    days_closed: ["Saturday", "Sunday"],
    opening_hours: "08:30:00",
    closing_hours: "15:00:00",
    min_enrollment: 0,
    max_enrollment: 50,
    min_student_teacher_ratio: 3,
    max_student_teacher_ratio: 3,
    images: images,
  },
];
