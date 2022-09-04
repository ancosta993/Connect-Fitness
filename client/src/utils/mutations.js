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
   mutation addUser($username: String!, $email: String!, $password: String!){
      addUser(username: $username, email:$email, password:$password) {
         token
         user {
            _id
            username
         }
      }
   }
`;

export const ADD_ROUTINE = gql`
    mutation addRoutine($title: String!, $workoutText: String!, $createdAt: Date!, $username: $String!) {
      addRoutine(title:$title, workoutText:$workoutText, createdAt:$createdAt, username:$username) 
  }
`;