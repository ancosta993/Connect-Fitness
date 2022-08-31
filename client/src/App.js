import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const httpLink = createhHttplink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    </ApolloProvider>
    
  );
}

export default App;
