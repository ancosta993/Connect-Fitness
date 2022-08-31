import './App.css';
import SignupPage from './component/pages/SignupPage';

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
      <div>
        <SignupPage></SignupPage>
      </div>
    </ApolloProvider>
    
  );
}

export default App;
