import React from 'react';
import UsersList from '../UsersList';
import {useQuery} from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'

const UsersPage = () => {
   // make request to the graphql server
   const {loading, data} = useQuery(QUERY_USERS);
   const users = data?.users || [];

   return (
      <UsersList users={users} />
   )
};

export default UsersPage;