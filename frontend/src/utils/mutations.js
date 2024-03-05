import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_FAVORITE = gql`
    mutation addToFavorites($schoolId: ID!) {
        addToFavorites(schoolId: $schoolId) {
            _id
            username
            favorites {
                _id
                name
            }
        }
    }
`;

export const REMOVE_FAVORITE = gql`
    mutation removeFromFavorites($schoolId: ID!) {
        removeFromFavorites(schoolId: $schoolId) {
            _id
            username
            favorites {
                _id
                name
            }
        }
    }
`;