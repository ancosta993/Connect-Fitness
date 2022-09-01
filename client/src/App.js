import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import all the page components
import SignupPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage';
import NoMatch from './component/pages/NoMatch';

import Header from './component/Header';
import UsersList from './component/UsersList'
// import Footer from './component/Footer';

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
      <Router>
        <Header />
          <Routes>
            <Route 
              path='/'
              element={<UsersList />}
            />
            <Route
              path='/signup'
              element={<SignupPage />}
            />
            <Route
              path='/login'
              element={<LoginPage />}
            />
            <Route
              path='/meetothers'
              element={<UsersList />}
            />
            {/* Wild Card Route */}
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
      </Router>
       
    </ApolloProvider>
    
  );
}

export default App;
