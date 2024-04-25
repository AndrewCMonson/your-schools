/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.AddUserDocument,
    "\n  mutation updateUserInfo($username: String, $email: String, $zipcode: String) {\n    updateUserInfo(username: $username, email: $email, zipcode: $zipcode) {\n      id\n      username\n      email\n      zipcode\n    }\n  }\n": types.UpdateUserInfoDocument,
    "\n  mutation updateUserPassword($password: String!, $newPassword: String!) {\n    updateUserPassword(password: $password, newPassword: $newPassword) {\n      id\n      username\n    }\n  }\n": types.UpdateUserPasswordDocument,
    "\n  mutation addToFavorites($schoolId: ID!) {\n    addToFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n": types.AddToFavoritesDocument,
    "\n  mutation removeFromFavorites($schoolId: ID!) {\n    removeFromFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n": types.RemoveFromFavoritesDocument,
    "\n  mutation logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query Schools($zipcode: String) {\n    schools(zipcode: $zipcode) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      max_tuition\n    }\n  }\n": types.SchoolsDocument,
    "\n  query School($id: ID!) {\n    school(id: $id) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      description\n      rating\n      offers_daycare\n      age_range\n      early_enrollment\n      min_tuition\n      max_tuition\n      days_open\n      days_closed\n      opening_hours\n      closing_hours\n      min_enrollment\n      max_enrollment\n      min_student_teacher_ratio\n      max_student_teacher_ratio\n      images {\n        url\n        alt\n        owner\n      }\n    }\n  }\n": types.SchoolDocument,
    "\n  query me {\n    me {\n      ...UserDetails\n    }\n  }\n": types.MeDocument,
    "\n  fragment UserDetails on User {\n    id\n    username\n    email\n    zipcode\n    favorites {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      age_range\n      max_tuition\n    }\n  }\n": types.UserDetailsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserInfo($username: String, $email: String, $zipcode: String) {\n    updateUserInfo(username: $username, email: $email, zipcode: $zipcode) {\n      id\n      username\n      email\n      zipcode\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserInfo($username: String, $email: String, $zipcode: String) {\n    updateUserInfo(username: $username, email: $email, zipcode: $zipcode) {\n      id\n      username\n      email\n      zipcode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserPassword($password: String!, $newPassword: String!) {\n    updateUserPassword(password: $password, newPassword: $newPassword) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserPassword($password: String!, $newPassword: String!) {\n    updateUserPassword(password: $password, newPassword: $newPassword) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addToFavorites($schoolId: ID!) {\n    addToFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation addToFavorites($schoolId: ID!) {\n    addToFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeFromFavorites($schoolId: ID!) {\n    removeFromFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation removeFromFavorites($schoolId: ID!) {\n    removeFromFavorites(schoolId: $schoolId) {\n      id\n      username\n      favorites {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Schools($zipcode: String) {\n    schools(zipcode: $zipcode) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      max_tuition\n    }\n  }\n"): (typeof documents)["\n  query Schools($zipcode: String) {\n    schools(zipcode: $zipcode) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      max_tuition\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query School($id: ID!) {\n    school(id: $id) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      description\n      rating\n      offers_daycare\n      age_range\n      early_enrollment\n      min_tuition\n      max_tuition\n      days_open\n      days_closed\n      opening_hours\n      closing_hours\n      min_enrollment\n      max_enrollment\n      min_student_teacher_ratio\n      max_student_teacher_ratio\n      images {\n        url\n        alt\n        owner\n      }\n    }\n  }\n"): (typeof documents)["\n  query School($id: ID!) {\n    school(id: $id) {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      description\n      rating\n      offers_daycare\n      age_range\n      early_enrollment\n      min_tuition\n      max_tuition\n      days_open\n      days_closed\n      opening_hours\n      closing_hours\n      min_enrollment\n      max_enrollment\n      min_student_teacher_ratio\n      max_student_teacher_ratio\n      images {\n        url\n        alt\n        owner\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query me {\n    me {\n      ...UserDetails\n    }\n  }\n"): (typeof documents)["\n  query me {\n    me {\n      ...UserDetails\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserDetails on User {\n    id\n    username\n    email\n    zipcode\n    favorites {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      age_range\n      max_tuition\n    }\n  }\n"): (typeof documents)["\n  fragment UserDetails on User {\n    id\n    username\n    email\n    zipcode\n    favorites {\n      id\n      name\n      address\n      city\n      state\n      zipcode\n      latitude\n      longitude\n      phone\n      website\n      email\n      rating\n      age_range\n      max_tuition\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;