/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjectId: { input: any; output: any; }
  /** No Value. */
  Void: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: User;
};

export type Bounds = {
  __typename?: 'Bounds';
  northeast?: Maybe<LatLng>;
  southwest?: Maybe<LatLng>;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['ObjectId']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type LatLng = {
  __typename?: 'LatLng';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type LocationInfo = {
  __typename?: 'LocationInfo';
  bounds?: Maybe<Bounds>;
  location?: Maybe<LatLng>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addReview: Review;
  addSchool: School;
  addToFavorites: User;
  addUser: Auth;
  deleteSchool?: Maybe<Scalars['String']['output']>;
  deleteUser?: Maybe<Scalars['String']['output']>;
  login: Auth;
  logout?: Maybe<Scalars['Void']['output']>;
  recoverPassword: Scalars['String']['output'];
  removeFromFavorites: User;
  updateSchoolInfo: School;
  updateUserInfo: User;
  updateUserPassword?: Maybe<User>;
};


export type MutationAddReviewArgs = {
  owner: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
  review: Scalars['String']['input'];
  schoolId: Scalars['ID']['input'];
};


export type MutationAddSchoolArgs = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  name: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zipcode: Scalars['String']['input'];
};


export type MutationAddToFavoritesArgs = {
  schoolId: Scalars['ID']['input'];
};


export type MutationAddUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteSchoolArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRecoverPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRemoveFromFavoritesArgs = {
  schoolId: Scalars['ID']['input'];
};


export type MutationUpdateSchoolInfoArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  age_range?: InputMaybe<Array<Scalars['Int']['input']>>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  closing_hours?: InputMaybe<Scalars['String']['input']>;
  days_closed?: InputMaybe<Array<Scalars['String']['input']>>;
  days_open?: InputMaybe<Array<Scalars['String']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  early_enrollment?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
  max_enrollment?: InputMaybe<Scalars['Int']['input']>;
  max_student_teacher_ratio?: InputMaybe<Scalars['Float']['input']>;
  max_tuition?: InputMaybe<Scalars['Int']['input']>;
  min_enrollment?: InputMaybe<Scalars['Int']['input']>;
  min_student_teacher_ratio?: InputMaybe<Scalars['Float']['input']>;
  min_tuition?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offers_daycare?: InputMaybe<Scalars['Boolean']['input']>;
  opening_hours?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserInfoArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserPasswordArgs = {
  newPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  allSchools: Array<School>;
  allUsers: Array<User>;
  getFavorites: Array<Maybe<User>>;
  me: User;
  school: School;
  schools: Schools;
};


export type QueryGetFavoritesArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySchoolArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySchoolsArgs = {
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export type Review = {
  __typename?: 'Review';
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  owner?: Maybe<User>;
  rating?: Maybe<Scalars['Float']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  schoolId?: Maybe<School>;
};

export type School = {
  __typename?: 'School';
  address?: Maybe<Scalars['String']['output']>;
  age_range?: Maybe<Array<Scalars['Int']['output']>>;
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  closing_hours?: Maybe<Scalars['String']['output']>;
  days_closed?: Maybe<Array<Scalars['String']['output']>>;
  days_open?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  early_enrollment?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  images?: Maybe<Array<Maybe<Image>>>;
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  latLng?: Maybe<LatLng>;
  max_enrollment?: Maybe<Scalars['Int']['output']>;
  max_student_teacher_ratio?: Maybe<Scalars['Float']['output']>;
  max_tuition?: Maybe<Scalars['Int']['output']>;
  min_enrollment?: Maybe<Scalars['Int']['output']>;
  min_student_teacher_ratio?: Maybe<Scalars['Float']['output']>;
  min_tuition?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  offers_daycare?: Maybe<Scalars['Boolean']['output']>;
  opening_hours?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<Review>>;
  state?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type Schools = {
  __typename?: 'Schools';
  locationInfo?: Maybe<LocationInfo>;
  schools: Array<School>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  favorites?: Maybe<Array<School>>;
  id?: Maybe<Scalars['ID']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  zipcode?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id?: string | null, username?: string | null, zipcode?: string | null, theme?: string | null, isAdmin?: boolean | null } } };

export type AddUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id?: string | null, username?: string | null, zipcode?: string | null, theme?: string | null } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: string | null };

export type UpdateUserInfoMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename?: 'User', id?: string | null, username?: string | null, email?: string | null, zipcode?: string | null, theme?: string | null } };

export type UpdateUserPasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type UpdateUserPasswordMutation = { __typename?: 'Mutation', updateUserPassword?: { __typename?: 'User', id?: string | null, username?: string | null } | null };

export type AddToFavoritesMutationVariables = Exact<{
  schoolId: Scalars['ID']['input'];
}>;


export type AddToFavoritesMutation = { __typename?: 'Mutation', addToFavorites: { __typename?: 'User', id?: string | null, username?: string | null, favorites?: Array<{ __typename?: 'School', id?: string | null, name?: string | null }> | null } };

export type RemoveFromFavoritesMutationVariables = Exact<{
  schoolId: Scalars['ID']['input'];
}>;


export type RemoveFromFavoritesMutation = { __typename?: 'Mutation', removeFromFavorites: { __typename?: 'User', id?: string | null, username?: string | null, favorites?: Array<{ __typename?: 'School', id?: string | null, name?: string | null }> | null } };

export type RecoverPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RecoverPasswordMutation = { __typename?: 'Mutation', recoverPassword: string };

export type AddReviewMutationVariables = Exact<{
  schoolId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
  review: Scalars['String']['input'];
  owner: Scalars['ID']['input'];
}>;


export type AddReviewMutation = { __typename?: 'Mutation', addReview: { __typename?: 'Review', id?: string | null, rating?: number | null, review?: string | null, owner?: { __typename?: 'User', id?: string | null, username?: string | null } | null } };

export type UpdateSchoolInfoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  offers_daycare?: InputMaybe<Scalars['Boolean']['input']>;
  age_range?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  early_enrollment?: InputMaybe<Scalars['Boolean']['input']>;
  min_tuition?: InputMaybe<Scalars['Int']['input']>;
  max_tuition?: InputMaybe<Scalars['Int']['input']>;
  days_open?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  days_closed?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  opening_hours?: InputMaybe<Scalars['String']['input']>;
  closing_hours?: InputMaybe<Scalars['String']['input']>;
  min_enrollment?: InputMaybe<Scalars['Int']['input']>;
  max_enrollment?: InputMaybe<Scalars['Int']['input']>;
  min_student_teacher_ratio?: InputMaybe<Scalars['Float']['input']>;
  max_student_teacher_ratio?: InputMaybe<Scalars['Float']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  isVerified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateSchoolInfoMutation = { __typename?: 'Mutation', updateSchoolInfo: { __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, email?: string | null, description?: string | null, rating?: number | null, offers_daycare?: boolean | null, age_range?: Array<number> | null, early_enrollment?: boolean | null, min_tuition?: number | null, max_tuition?: number | null, days_open?: Array<string> | null, days_closed?: Array<string> | null, opening_hours?: string | null, closing_hours?: string | null, min_enrollment?: number | null, max_enrollment?: number | null, min_student_teacher_ratio?: number | null, max_student_teacher_ratio?: number | null, avatar?: string | null, isVerified?: boolean | null } };

export type AddSchoolMutationVariables = Exact<{
  name: Scalars['String']['input'];
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zipcode: Scalars['String']['input'];
}>;


export type AddSchoolMutation = { __typename?: 'Mutation', addSchool: { __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null } };

export type DeleteSchoolMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteSchoolMutation = { __typename?: 'Mutation', deleteSchool?: string | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: any | null };

export type SchoolsQueryVariables = Exact<{
  zipcode?: InputMaybe<Scalars['String']['input']>;
}>;


export type SchoolsQuery = { __typename?: 'Query', schools: { __typename?: 'Schools', schools: Array<{ __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, offers_daycare?: boolean | null, isVerified?: boolean | null, description?: string | null, email?: string | null, rating?: number | null, avatar?: string | null, latLng?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null, images?: Array<{ __typename?: 'Image', url?: string | null, alt?: string | null, owner?: any | null } | null> | null }>, locationInfo?: { __typename?: 'LocationInfo', location?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null, bounds?: { __typename?: 'Bounds', northeast?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null, southwest?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null } | null } | null } };

export type AllSchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSchoolsQuery = { __typename?: 'Query', allSchools: Array<{ __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, email?: string | null, description?: string | null, rating?: number | null, offers_daycare?: boolean | null, isVerified?: boolean | null, age_range?: Array<number> | null, early_enrollment?: boolean | null, min_tuition?: number | null, max_tuition?: number | null, days_open?: Array<string> | null, days_closed?: Array<string> | null, opening_hours?: string | null, closing_hours?: string | null, min_enrollment?: number | null, max_enrollment?: number | null, min_student_teacher_ratio?: number | null, max_student_teacher_ratio?: number | null, latLng?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null, images?: Array<{ __typename?: 'Image', url?: string | null, alt?: string | null, owner?: any | null } | null> | null, reviews?: Array<{ __typename?: 'Review', id?: string | null, rating?: number | null, review?: string | null, createdAt?: string | null, owner?: { __typename?: 'User', id?: string | null, username?: string | null } | null }> | null }> };

export type SchoolQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SchoolQuery = { __typename?: 'Query', school: { __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, email?: string | null, description?: string | null, rating?: number | null, offers_daycare?: boolean | null, isVerified?: boolean | null, age_range?: Array<number> | null, early_enrollment?: boolean | null, min_tuition?: number | null, max_tuition?: number | null, days_open?: Array<string> | null, days_closed?: Array<string> | null, opening_hours?: string | null, closing_hours?: string | null, min_enrollment?: number | null, max_enrollment?: number | null, min_student_teacher_ratio?: number | null, max_student_teacher_ratio?: number | null, latLng?: { __typename?: 'LatLng', lat?: number | null, lng?: number | null } | null, images?: Array<{ __typename?: 'Image', url?: string | null, alt?: string | null, owner?: any | null } | null> | null, reviews?: Array<{ __typename?: 'Review', id?: string | null, rating?: number | null, review?: string | null, createdAt?: string | null, owner?: { __typename?: 'User', id?: string | null, username?: string | null } | null }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserDetailsFragment': UserDetailsFragment } }
  ) };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', allUsers: Array<{ __typename?: 'User', email?: string | null, id?: string | null, isAdmin?: boolean | null, password?: string | null, theme?: string | null, username?: string | null, zipcode?: string | null, favorites?: Array<{ __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, email?: string | null, rating?: number | null, age_range?: Array<number> | null, max_tuition?: number | null }> | null }> };

export type UserDetailsFragment = { __typename?: 'User', id?: string | null, username?: string | null, email?: string | null, zipcode?: string | null, theme?: string | null, isAdmin?: boolean | null, favorites?: Array<{ __typename?: 'School', id?: string | null, name?: string | null, address?: string | null, city?: string | null, state?: string | null, zipcode?: string | null, phone?: string | null, website?: string | null, email?: string | null, rating?: number | null, age_range?: Array<number> | null, max_tuition?: number | null }> | null } & { ' $fragmentName'?: 'UserDetailsFragment' };

export const UserDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<UserDetailsFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const AddUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"theme"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"zipcode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}}},{"kind":"Argument","name":{"kind":"Name","value":"theme"},"value":{"kind":"Variable","name":{"kind":"Name","value":"theme"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}}]}}]}}]} as unknown as DocumentNode<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;
export const UpdateUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const AddToFavoritesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addToFavorites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToFavorites"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schoolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddToFavoritesMutation, AddToFavoritesMutationVariables>;
export const RemoveFromFavoritesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeFromFavorites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFromFavorites"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schoolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>;
export const RecoverPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recoverPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recoverPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<RecoverPasswordMutation, RecoverPasswordMutationVariables>;
export const AddReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"review"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schoolId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schoolId"}}},{"kind":"Argument","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}},{"kind":"Argument","name":{"kind":"Name","value":"review"},"value":{"kind":"Variable","name":{"kind":"Name","value":"review"}}},{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<AddReviewMutation, AddReviewMutationVariables>;
export const UpdateSchoolInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSchoolInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"website"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rating"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offers_daycare"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"age_range"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"early_enrollment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"min_tuition"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max_tuition"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"days_open"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"days_closed"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"opening_hours"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"closing_hours"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"min_enrollment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max_enrollment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"min_student_teacher_ratio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"max_student_teacher_ratio"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isVerified"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSchoolInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}},{"kind":"Argument","name":{"kind":"Name","value":"zipcode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}}},{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}},{"kind":"Argument","name":{"kind":"Name","value":"website"},"value":{"kind":"Variable","name":{"kind":"Name","value":"website"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"rating"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rating"}}},{"kind":"Argument","name":{"kind":"Name","value":"offers_daycare"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offers_daycare"}}},{"kind":"Argument","name":{"kind":"Name","value":"age_range"},"value":{"kind":"Variable","name":{"kind":"Name","value":"age_range"}}},{"kind":"Argument","name":{"kind":"Name","value":"early_enrollment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"early_enrollment"}}},{"kind":"Argument","name":{"kind":"Name","value":"min_tuition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"min_tuition"}}},{"kind":"Argument","name":{"kind":"Name","value":"max_tuition"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max_tuition"}}},{"kind":"Argument","name":{"kind":"Name","value":"days_open"},"value":{"kind":"Variable","name":{"kind":"Name","value":"days_open"}}},{"kind":"Argument","name":{"kind":"Name","value":"days_closed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"days_closed"}}},{"kind":"Argument","name":{"kind":"Name","value":"opening_hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"opening_hours"}}},{"kind":"Argument","name":{"kind":"Name","value":"closing_hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"closing_hours"}}},{"kind":"Argument","name":{"kind":"Name","value":"min_enrollment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"min_enrollment"}}},{"kind":"Argument","name":{"kind":"Name","value":"max_enrollment"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max_enrollment"}}},{"kind":"Argument","name":{"kind":"Name","value":"min_student_teacher_ratio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"min_student_teacher_ratio"}}},{"kind":"Argument","name":{"kind":"Name","value":"max_student_teacher_ratio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"max_student_teacher_ratio"}}},{"kind":"Argument","name":{"kind":"Name","value":"avatar"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar"}}},{"kind":"Argument","name":{"kind":"Name","value":"isVerified"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isVerified"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"offers_daycare"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"early_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"days_open"}},{"kind":"Field","name":{"kind":"Name","value":"days_closed"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours"}},{"kind":"Field","name":{"kind":"Name","value":"closing_hours"}},{"kind":"Field","name":{"kind":"Name","value":"min_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"max_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"max_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}}]}}]} as unknown as DocumentNode<UpdateSchoolInfoMutation, UpdateSchoolInfoMutationVariables>;
export const AddSchoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addSchool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSchool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}},{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}},{"kind":"Argument","name":{"kind":"Name","value":"zipcode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}}]}}]}}]} as unknown as DocumentNode<AddSchoolMutation, AddSchoolMutationVariables>;
export const DeleteSchoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSchool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSchool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteSchoolMutation, DeleteSchoolMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const SchoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Schools"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"zipcode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"zipcode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"offers_daycare"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latLng"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locationInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bounds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"northeast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"southwest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SchoolsQuery, SchoolsQueryVariables>;
export const AllSchoolsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllSchools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allSchools"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latLng"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"offers_daycare"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"early_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"days_open"}},{"kind":"Field","name":{"kind":"Name","value":"days_closed"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours"}},{"kind":"Field","name":{"kind":"Name","value":"closing_hours"}},{"kind":"Field","name":{"kind":"Name","value":"min_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"max_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"max_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllSchoolsQuery, AllSchoolsQueryVariables>;
export const SchoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"School"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"school"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"latLng"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"offers_daycare"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"early_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}},{"kind":"Field","name":{"kind":"Name","value":"days_open"}},{"kind":"Field","name":{"kind":"Name","value":"days_closed"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours"}},{"kind":"Field","name":{"kind":"Name","value":"closing_hours"}},{"kind":"Field","name":{"kind":"Name","value":"min_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"max_enrollment"}},{"kind":"Field","name":{"kind":"Name","value":"min_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"max_student_teacher_ratio"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SchoolQuery, SchoolQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const AllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"age_range"}},{"kind":"Field","name":{"kind":"Name","value":"max_tuition"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"zipcode"}}]}}]}}]} as unknown as DocumentNode<AllUsersQuery, AllUsersQueryVariables>;