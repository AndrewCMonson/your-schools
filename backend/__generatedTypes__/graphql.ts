/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['ID']['output'];
  user: Maybe<User>;
};

export type Image = {
  __typename?: 'Image';
  alt: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToFavorites: Maybe<User>;
  addUser: Maybe<Auth>;
  login: Maybe<Auth>;
  removeFromFavorites: Maybe<User>;
};


export type MutationAddToFavoritesArgs = {
  schoolId: Scalars['ID']['input'];
};


export type MutationAddUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRemoveFromFavoritesArgs = {
  schoolId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getFavorites: Array<Maybe<User>>;
  me: User;
  school: School;
  schools: Array<School>;
};


export type QueryGetFavoritesArgs = {
  username: InputMaybe<Scalars['String']['input']>;
};


export type QuerySchoolArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySchoolsArgs = {
  zipcode: InputMaybe<Scalars['String']['input']>;
};

export type School = {
  __typename?: 'School';
  address: Scalars['String']['output'];
  age_range: Maybe<Array<Scalars['Int']['output']>>;
  city: Scalars['String']['output'];
  closing_hours: Scalars['String']['output'];
  days_closed: Maybe<Array<Scalars['String']['output']>>;
  days_open: Maybe<Array<Scalars['String']['output']>>;
  description: Scalars['String']['output'];
  early_enrollment: Scalars['Boolean']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Maybe<Array<Image>>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  max_enrollment: Scalars['Int']['output'];
  max_student_teacher_ratio: Scalars['Float']['output'];
  max_tuition: Scalars['Int']['output'];
  min_enrollment: Scalars['Int']['output'];
  min_student_teacher_ratio: Scalars['Float']['output'];
  min_tuition: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  offers_daycare: Scalars['Boolean']['output'];
  opening_hours: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  state: Scalars['String']['output'];
  website: Scalars['String']['output'];
  zipcode: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Maybe<Scalars['String']['output']>;
  favorites: Maybe<Array<Maybe<School>>>;
  id: Maybe<Scalars['ID']['output']>;
  password: Maybe<Scalars['String']['output']>;
  username: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<Auth>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Image: ResolverTypeWrapper<Image>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  School: ResolverTypeWrapper<School>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Auth;
  ID: Scalars['ID']['output'];
  Image: Image;
  String: Scalars['String']['output'];
  Mutation: {};
  Query: {};
  School: School;
  Int: Scalars['Int']['output'];
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  User: User;
};

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  token: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  alt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addToFavorites: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationAddToFavoritesArgs, 'schoolId'>>;
  addUser: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationAddUserArgs, 'email' | 'password' | 'username'>>;
  login: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  removeFromFavorites: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRemoveFromFavoritesArgs, 'schoolId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getFavorites: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, QueryGetFavoritesArgs>;
  me: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  school: Resolver<ResolversTypes['School'], ParentType, ContextType, RequireFields<QuerySchoolArgs, 'id'>>;
  schools: Resolver<Array<ResolversTypes['School']>, ParentType, ContextType, QuerySchoolsArgs>;
};

export type SchoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['School'] = ResolversParentTypes['School']> = {
  address: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  age_range: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  city: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  closing_hours: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  days_closed: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  days_open: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  early_enrollment: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  email: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images: Resolver<Maybe<Array<ResolversTypes['Image']>>, ParentType, ContextType>;
  latitude: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max_enrollment: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  max_student_teacher_ratio: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max_tuition: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min_enrollment: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min_student_teacher_ratio: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min_tuition: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offers_daycare: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  opening_hours: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  state: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipcode: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favorites: Resolver<Maybe<Array<Maybe<ResolversTypes['School']>>>, ParentType, ContextType>;
  id: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  password: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Auth: AuthResolvers<ContextType>;
  Image: ImageResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  School: SchoolResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};

