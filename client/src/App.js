import './App.css';
import React, {useState} from 'react';
import SignupPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage';
import Header from './component/Header';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
       <Header />
    </ApolloProvider>
    
  );
}

export default App;
