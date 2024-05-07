const typedefs = `
type Image {
    url: String
    alt: String
    owner: ObjectId
} 

type Auth {
    token: ID! 
    user: User!
  }
  
type User {
    id: ID
    username: String 
    email: String
    password: String
    zipcode: String
    favorites: [School!]
}

type LatLng {
    lat: Float
    lng: Float
}

type Bounds {
    northeast: LatLng
    southwest: LatLng
}

type LocationInfo {
  location: LatLng
  bounds: Bounds
}

type Schools {
  schools: [School!]!
  locationInfo: LocationInfo
}

type School {
    id: ID
    name: String
    address: String
    city: String
    state: String
    zipcode: String
    latLng: LatLng
    phone: String
    website: String
    email: String
    description: String
    rating: Float
    offers_daycare: Boolean
    age_range: [Int!]
    early_enrollment: Boolean
    min_tuition: Int
    max_tuition: Int
    days_open: [String!]
    days_closed: [String!]
    opening_hours: String
    closing_hours: String
    min_enrollment: Int
    max_enrollment: Int
    min_student_teacher_ratio: Float
    max_student_teacher_ratio: Float
    images: [Image]
    avatar: String
  }
  
  type Query {
    schools(zipcode: String): Schools!
    school(id: ID!): School!
    me: User! 
    getFavorites(username: String): [User]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth!
    updateUserInfo(username: String, email: String, password: String, zipcode: String): User!
    updateUserPassword(password: String!, newPassword: String!): User
    login(email: String!, password: String!): Auth!
    addToFavorites(schoolId: ID!): User
    removeFromFavorites(schoolId: ID!): User
    logout: Void
  }

  scalar ObjectId
  scalar Void
  `;

export default typedefs;
