import {gql} from '@apollo/client';

export const QUERY_USERS = gql`
   query users {
      users {
         _id
         username
         email
         description
         weight
         age
         level
         gender
      }
   }
`;

export const QUERY_USER = gql`
   query user($username: String!) {
      user(username:$username) {
         _id
         username
         email
         description
         weight
         age
         level
         gender
         routine{
            _id
            title
            workoutText
            day
            reps
            sets
            duration
          }
         diet{
            _id
            name
            mealTime
            calorie
            details
         }
      }
   }
`;

export const QUERY_ME = gql`
   query me {
      me {
         _id
         username
         email
         description
         weight
         age
         level
         gender
         routine{
            _id
            title
            workoutText
            day
            reps
            sets
            duration
         }
         diet{
         _id
         name
         mealTime
         calorie
         details
       }
      }
   }
`;

export const QUERY_ROUTINES = gql`
   query routines {
      routine {
         title
         workoutRoutine
      }
   }
`;

