import { graphql } from "../__generatedTypes__/gql";

export const LOGIN_USER = graphql(/* GraphQL */ `
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

export const ADD_USER = graphql(/* GraphQL */ `
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

export const ADD_FAVORITE = graphql(/* GraphQL */ `
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

export const REMOVE_FAVORITE = graphql(/* GraphQL */ `
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

export const LOGOUT = graphql(/* GraphQL */ `
  mutation logout {
    logout
  }
`);
