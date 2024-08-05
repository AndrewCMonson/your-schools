import { gql } from "graphql-tag";

export const LoginUser = gql(`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        zipcode
        theme
        isAdmin
      }
    }
  }
`);

export const AddUser = gql(`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        zipcode
        theme
      }
    }
  }
`);

export const DeleteUser = gql(`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`);

export const UpdateUserInfo = gql(`
  mutation updateUserInfo(
    $username: String
    $email: String
    $zipcode: String
    $theme: String
  ) {
    updateUserInfo(
      username: $username
      email: $email
      zipcode: $zipcode
      theme: $theme
    ) {
      id
      username
      email
      zipcode
      theme
    }
  }
`);

export const UpdateUserPassword = gql(`
  mutation updateUserPassword($password: String!, $newPassword: String!) {
    updateUserPassword(password: $password, newPassword: $newPassword) {
      id
      username
    }
  }
`);

export const AddFavorite = gql(`
  mutation addToFavorites($schoolId: ID!) {
    addToFavorites(schoolId: $schoolId) {
      id
      username
      favorites {
        id
        name
      }
    }
  }
`);

export const RemoveFavorite = gql(`
  mutation removeFromFavorites($schoolId: ID!) {
    removeFromFavorites(schoolId: $schoolId) {
      id
      username
      favorites {
        id
        name
      }
    }
  }
`);

export const RecoverPassword = gql(`
  mutation recoverPassword($email: String!) {
    recoverPassword(email: $email)
  }
`);

export const AddReview = gql(`
  mutation addReview($schoolId: ID!, $rating: Float!, $review: String!, $owner: ID!) {
    addReview(schoolId: $schoolId, rating: $rating, review: $review, owner: $owner) {
      id
      rating
      review
      owner {
        id
        username
      }
    }
  }
`);

export const UpdateSchoolInfo = gql(`
  mutation updateSchoolInfo(
    $id: ID!
    $name: String
    $address: String
    $city: String
    $state: String
    $zipcode: String
    $phone: String
    $website: String
    $email: String
    $description: String
    $rating: Float
    $offers_daycare: Boolean
    $age_range: [Int!]
    $early_enrollment: Boolean
    $min_tuition: Int
    $max_tuition: Int
    $days_open: [String!]
    $days_closed: [String!]
    $opening_hours: String
    $closing_hours: String
    $min_enrollment: Int
    $max_enrollment: Int
    $min_student_teacher_ratio: Float
    $max_student_teacher_ratio: Float
    $avatar: String
    $isVerified: Boolean
  ) {
    updateSchoolInfo(
      id: $id
      name: $name
      address: $address
      city: $city
      state: $state
      zipcode: $zipcode
      phone: $phone
      website: $website
      email: $email
      description: $description
      rating: $rating
      offers_daycare: $offers_daycare
      age_range: $age_range
      early_enrollment: $early_enrollment
      min_tuition: $min_tuition
      max_tuition: $max_tuition
      days_open: $days_open
      days_closed: $days_closed
      opening_hours: $opening_hours
      closing_hours: $closing_hours
      min_enrollment: $min_enrollment
      max_enrollment: $max_enrollment
      min_student_teacher_ratio: $min_student_teacher_ratio
      max_student_teacher_ratio: $max_student_teacher_ratio
      avatar: $avatar
      isVerified: $isVerified
    ) {
      id
      name
      address
      city
      state
      zipcode
      phone
      website
      email
      description
      rating
      offers_daycare
      age_range
      early_enrollment
      min_tuition
      max_tuition
      days_open
      days_closed
      opening_hours
      closing_hours
      min_enrollment
      max_enrollment
      min_student_teacher_ratio
      max_student_teacher_ratio
      avatar
      isVerified
    }
  }
`);

export const AddSchool = gql(`
  mutation addSchool($name: String!, $address: String!, $city: String!, $state: String!, $zipcode: String!) {
    addSchool(name: $name, address: $address, city: $city, state: $state, zipcode: $zipcode) {
      id
      name
      address
      city
      state
      zipcode
    }
  }
`);

export const DeleteSchool = gql(`
  mutation deleteSchool($id: ID!) {
    deleteSchool(id: $id)
  }
`);

export const Logout = gql(`
  mutation logout {
    logout
  }
`);
