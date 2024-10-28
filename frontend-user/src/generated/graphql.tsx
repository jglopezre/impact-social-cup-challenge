import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Collaborator = {
  __typename?: 'Collaborator';
  company: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  opportunityStatus: OpportunityStatus;
  phone: Scalars['String']['output'];
  userTask: Array<UserTask>;
};

export type CreateCollaboratorInput = {
  company: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateParticipantInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  tickets: Scalars['Int']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserTaskInput = {
  collaboratorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  limitDate: Scalars['String']['input'];
  participantId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteCollaboratorInput = {
  delete: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

export type DeleteParticipantInput = {
  delete: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

export type DeleteUserTaskInput = {
  delete: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCollaborator: Collaborator;
  createParticipant: Participant;
  createUser: User;
  createUserTask: UserTask;
  deleteCollaborator: Collaborator;
  deleteParticipant: Participant;
  deleteUserTask: UserTask;
  updateCollaborator: Collaborator;
  updateParticipant: Participant;
  updateUserTask: UserTask;
};


export type MutationCreateCollaboratorArgs = {
  collaboratorInput: CreateCollaboratorInput;
};


export type MutationCreateParticipantArgs = {
  participantInput: CreateParticipantInput;
};


export type MutationCreateUserArgs = {
  userInput: CreateUserInput;
};


export type MutationCreateUserTaskArgs = {
  createUserTaskInput: CreateUserTaskInput;
};


export type MutationDeleteCollaboratorArgs = {
  colaboratorInput: DeleteCollaboratorInput;
};


export type MutationDeleteParticipantArgs = {
  participantInput: DeleteParticipantInput;
};


export type MutationDeleteUserTaskArgs = {
  userTaskInput: DeleteUserTaskInput;
};


export type MutationUpdateCollaboratorArgs = {
  collaboratorInput: UpdateCollaboratorInput;
};


export type MutationUpdateParticipantArgs = {
  participantInput: UpdateParticipantInput;
};


export type MutationUpdateUserTaskArgs = {
  userTaskInput: UpdateUserTaskInput;
};

export type OpportunityStatus = {
  __typename?: 'OpportunityStatus';
  collaborators: Array<Collaborator>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  participants: Array<Participant>;
};

export type Participant = {
  __typename?: 'Participant';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isDeleted: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  opportunityStatus: OpportunityStatus;
  tickets: Scalars['Int']['output'];
  userTask: Array<UserTask>;
};

export type Query = {
  __typename?: 'Query';
  collaborator: Collaborator;
  collaborators: Array<Collaborator>;
  opportunities: Array<OpportunityStatus>;
  opportunity: OpportunityStatus;
  participant: Participant;
  participants: Array<Participant>;
  user: User;
  userTask: UserTask;
  userTasks: Array<UserTask>;
  users: Array<User>;
};


export type QueryCollaboratorArgs = {
  id: Scalars['String']['input'];
};


export type QueryOpportunityArgs = {
  id: Scalars['Int']['input'];
};


export type QueryParticipantArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserTaskArgs = {
  id: Scalars['String']['input'];
};

export type UpdateCollaboratorInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  opportunityStatus?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateParticipantInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  opportunityStatus?: InputMaybe<Scalars['Int']['input']>;
  tickets?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserTaskInput = {
  collaboratorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  limitDate?: InputMaybe<Scalars['String']['input']>;
  participantId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  userTasks: Array<UserTask>;
  username: Scalars['String']['output'];
};

export type UserTask = {
  __typename?: 'UserTask';
  collaborator?: Maybe<Collaborator>;
  createDate: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isDeleted: Scalars['Boolean']['output'];
  limitDate: Scalars['String']['output'];
  participant?: Maybe<Participant>;
  status: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type CreateNewParticipantMutationVariables = Exact<{
  participantInput: CreateParticipantInput;
}>;


export type CreateNewParticipantMutation = { __typename?: 'Mutation', createParticipant: { __typename?: 'Participant', id: string } };

export type CreateNewCollaboratorMutationVariables = Exact<{
  collaboratorInput: CreateCollaboratorInput;
}>;


export type CreateNewCollaboratorMutation = { __typename?: 'Mutation', createCollaborator: { __typename?: 'Collaborator', id: string } };


export const CreateNewParticipantDocument = gql`
    mutation CreateNewParticipant($participantInput: CreateParticipantInput!) {
  createParticipant(participantInput: $participantInput) {
    id
  }
}
    `;
export type CreateNewParticipantMutationFn = Apollo.MutationFunction<CreateNewParticipantMutation, CreateNewParticipantMutationVariables>;

/**
 * __useCreateNewParticipantMutation__
 *
 * To run a mutation, you first call `useCreateNewParticipantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewParticipantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewParticipantMutation, { data, loading, error }] = useCreateNewParticipantMutation({
 *   variables: {
 *      participantInput: // value for 'participantInput'
 *   },
 * });
 */
export function useCreateNewParticipantMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewParticipantMutation, CreateNewParticipantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewParticipantMutation, CreateNewParticipantMutationVariables>(CreateNewParticipantDocument, options);
      }
export type CreateNewParticipantMutationHookResult = ReturnType<typeof useCreateNewParticipantMutation>;
export type CreateNewParticipantMutationResult = Apollo.MutationResult<CreateNewParticipantMutation>;
export type CreateNewParticipantMutationOptions = Apollo.BaseMutationOptions<CreateNewParticipantMutation, CreateNewParticipantMutationVariables>;
export const CreateNewCollaboratorDocument = gql`
    mutation CreateNewCollaborator($collaboratorInput: CreateCollaboratorInput!) {
  createCollaborator(collaboratorInput: $collaboratorInput) {
    id
  }
}
    `;
export type CreateNewCollaboratorMutationFn = Apollo.MutationFunction<CreateNewCollaboratorMutation, CreateNewCollaboratorMutationVariables>;

/**
 * __useCreateNewCollaboratorMutation__
 *
 * To run a mutation, you first call `useCreateNewCollaboratorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewCollaboratorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewCollaboratorMutation, { data, loading, error }] = useCreateNewCollaboratorMutation({
 *   variables: {
 *      collaboratorInput: // value for 'collaboratorInput'
 *   },
 * });
 */
export function useCreateNewCollaboratorMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewCollaboratorMutation, CreateNewCollaboratorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewCollaboratorMutation, CreateNewCollaboratorMutationVariables>(CreateNewCollaboratorDocument, options);
      }
export type CreateNewCollaboratorMutationHookResult = ReturnType<typeof useCreateNewCollaboratorMutation>;
export type CreateNewCollaboratorMutationResult = Apollo.MutationResult<CreateNewCollaboratorMutation>;
export type CreateNewCollaboratorMutationOptions = Apollo.BaseMutationOptions<CreateNewCollaboratorMutation, CreateNewCollaboratorMutationVariables>;