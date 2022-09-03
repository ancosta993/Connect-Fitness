import {gql} from '@apollo/client';

export const QUERY_USERS = gql`
   query users {
      users {
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

export const QUERY_ME = gql`
   query me {
      me {
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

