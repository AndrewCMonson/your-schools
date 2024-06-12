import { graphql } from "../../__generatedTypes__";

export const GetSchools = graphql(/* GraphQL */ `
  query Schools($zipcode: String) {
    schools(zipcode: $zipcode) {
      schools {
        id
        name
        address
        city
        state
        zipcode
        phone
        website
        offers_daycare
        isVerified
        description
        latLng {
          lat
          lng
        }
        email
        rating
        images {
          url
          alt
          owner
        }
        avatar
      }
      locationInfo {
        location {
          lat
          lng
        }
        bounds {
          northeast {
            lat
            lng
          }
          southwest {
            lat
            lng
          }
        }
      }
    }
  }
`);

export const GetSchool = graphql(/* GraphQL */ `
  query School($id: ID!) {
    school(id: $id) {
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
      latLng {
        lat
        lng
      }
      rating
      offers_daycare
      isVerified
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
      reviews {
        id
        rating
        review
        createdAt
        owner {
          id
          username
        }
      }
    }
  }
`);

export const GetMe = graphql(`
  query me {
    me {
      ...UserDetails
    }
  }
`);

export const UserDetailsFragment = graphql(/* GraphQL */ `
  fragment UserDetails on User {
    id
    username
    email
    zipcode
    theme
    favorites {
      id
      name
      address
      city
      state
      zipcode
      phone
      website
      email
      rating
      age_range
      max_tuition
    }
  }
`);
