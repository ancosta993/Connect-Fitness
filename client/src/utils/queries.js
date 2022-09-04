import {gql} from '@apollo/client';

export const QUERY_USERS = gql`
   query users {
      users {
         username
         email
      }
   }
`;

export const QUERY_ROUTINES = gql`
   query routines {
      routines {
         username
         title
         workoutRoutine
      }
   }
`

