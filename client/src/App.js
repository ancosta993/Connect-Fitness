import './App.css';
import React, {useState} from 'react';
import SignupPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState('Signup');

  return (
    <ApolloProvider client={client}>
       {currentPage === "Signup" ? <SignupPage setCurrentPage={setCurrentPage}></SignupPage>
        :
        <LoginPage setCurrentPage={setCurrentPage} ></LoginPage>
        }
    </ApolloProvider>
    
  );
}

export default App;
