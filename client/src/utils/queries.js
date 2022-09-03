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

