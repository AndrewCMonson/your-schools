import { graphql } from "../../__generatedTypes__/";

export const LOGIN_USER = graphql(`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`);

export const ADD_USER = graphql(`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`);

export const UPDATE_USER_INFO = graphql(`
  mutation updateUserInfo($username: String, $email: String, $zipcode: String) {
    updateUserInfo(username: $username, email: $email, zipcode: $zipcode) {
      id
      username
      email
      zipcode
    }
  }
`);

export const UPDATE_USER_PASSWORD = graphql(`
  mutation updateUserPassword($password: String!, $newPassword: String!) {
    updateUserPassword(password: $password, newPassword: $newPassword) {
      id
      username
    }
  }
`);

export const ADD_FAVORITE = graphql(`
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

export const REMOVE_FAVORITE = graphql(`
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

export const LOGOUT = graphql(`
  mutation logout {
    logout
  }
`);
