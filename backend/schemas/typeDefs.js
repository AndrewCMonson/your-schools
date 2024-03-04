const typedefs = `
type Image {
    url: String
    alt: String
    owner: String
}  

type School {
    id: ID
    name: String
    address: String
    city: String
    state: String
    zipcode: String
    latitude: Float
    longitude: Float
    phone: String
    website: String
    email: String
    description: String
    rating: Float
    offers_daycare: Boolean
    age_range: [Int]
    early_enrollment: Boolean
    min_tuition: Int
    max_tuition: Int
    days_open: [String]
    days_closed: [String]
    opening_hours: String
    closing_hours: String
    min_enrollment: Int
    max_enrollment: Int
    min_student_teacher_ratio: Float
    max_student_teacher_ratio: Float
    images: [Image]
  }
  
  type Query {
    schools(zipcode: String): [School]
    school(id: ID!): School
  }
  `;

export default typedefs;