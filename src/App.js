import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

//import the pages for the router here
import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
        </>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
