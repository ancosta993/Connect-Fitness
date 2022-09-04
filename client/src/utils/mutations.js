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
  mutation addUser($username: String!, $password: String!, $email: String!, $gender:String!, $weight:Float!, $dateOfBirth:String!, $level: String!, $description: String!) {
    addUser(username: $username, password: $password, email: $email, gender:$gender, weight:$weight,  dateOfBirth: $dateOfBirth, level: $level, description: $description){
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ROUTINE = gql`
    mutation AddRoutine($title: String!, $workoutText: String!, $day:String!, $reps:String, $sets:String, $duration:String) {
      addRoutine(title: $title, workoutText: $workoutText, day: $day, reps: $reps, sets: $sets, duration: $duration) {
        _id
        title
        workoutText
        day
        reps
        sets
        duration
        username
    }
  }
`;