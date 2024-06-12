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

export const Logout = gql(`
  mutation logout {
    logout
  }
`);
