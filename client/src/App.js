import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import all the page components
import SignupPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage';
import NoMatch from './component/pages/NoMatch';
import Home from './component/pages/Home';
import UsersPage from './component/pages/UsersPage';
import Dashboard from './component/pages/Dashboard';
import Contact from './component/pages/Contact';

import Header from './component/Header/';
import Routine from './component/pages/Routine';

import Header from './component/Header/';
import Footer from './component/Footer';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// _ is used as a placeholder for a param we are not using.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
              element={<Home />}
            />
            <Route
              path='/contact'
              element={<Contact />}
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
              element={<UsersPage />}
            />
            <Route
              path='/newroutine'
              element={<Routine />}
            />
            {/* Wild Card Route */}
            <Route
              path="*"
              element={<NoMatch />}
            />
            <Route
                path="/dashboard">
                <Route path=":username"  element={<Dashboard />} />
                <Route path="" element={<Dashboard />} />
              </Route>
          </Routes>
        <Footer/>
      </Router>
       
    </ApolloProvider>
    
  );
}

export default App;
