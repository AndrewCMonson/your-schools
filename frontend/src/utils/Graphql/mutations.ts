import { graphql } from "../../__generatedTypes__/";

export const LoginUser = graphql(`
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

export const AddUser = graphql(`
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

export const UpdateUserInfo = graphql(`
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

export const UpdateUserPassword = graphql(`
  mutation updateUserPassword($password: String!, $newPassword: String!) {
    updateUserPassword(password: $password, newPassword: $newPassword) {
      id
      username
    }
  }
`);

export const AddFavorite = graphql(`
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

export const RemoveFavorite = graphql(`
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

export const RecoverPassword = graphql(`
  mutation recoverPassword($email: String!) {
    recoverPassword(email: $email)
  }
`);

export const AddReview = graphql(`
  mutation addReview($schoolId: ID!, $rating: Float!, $review: String!) {
    addReview(schoolId: $schoolId, rating: $rating, review: $review) {
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

export const Logout = graphql(`
  mutation logout {
    logout
  }
`);
