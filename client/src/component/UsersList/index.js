import {useQuery} from '@apollo/client'
import { QUERY_USERS } from '../../utils/queries'

const UserList = () => {
   // make request to the graphql server
   const {loading, data} = useQuery(QUERY_USERS);
   const users = data?.users || [];
   return (
      <ul>
        {users.map(user => {
         return (
            <li>
               Name: {user.username} Email: {user.email}
            </li>
         )
        })} 
      </ul>
   )
};

export default UserList;