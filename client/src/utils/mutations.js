import {gql} from '@apollo/client';

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
  mutation addUser($username: String!, $password: String!, $email: email, $gender: String!, $weight: String!, $level: String!, $dateOfBirth: String!, $description: String) {
    addUser(username: $username, password: $password, email: $email, gender: $gender, weight: $weight, level: $level, dateOfBirth: $dateOfBirth, description: $description){
      token
      user {
        _id
        username
      }
    }
  }
`;