import { graphql } from "../../__generatedTypes__/gql";

export const GET_SCHOOLS = graphql(/* GraphQL */ `
  query Schools($zipcode: String) {
    schools(zipcode: $zipcode) {
      id
      name
      address
      city
      state
      zipcode
      latitude
      longitude
      phone
      website
      email
      rating
      max_tuition
    }
  }
`);

export const GET_SCHOOL = graphql(/* GraphQL */ `
  query School($id: ID!) {
    school(id: $id) {
      id
      name
      address
      city
      state
      zipcode
      latitude
      longitude
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
      images {
        url
        alt
        owner
      }
    }
  }
`);

export const GET_ME = graphql(/* GraphQL */ `
  query me {
    me {
      id
      username
      email
      zipcode
      favorites {
        id
        name
        address
        city
        state
        zipcode
        latitude
        longitude
        phone
        website
        email
        rating
        age_range
        max_tuition
      }
    }
  }
`);