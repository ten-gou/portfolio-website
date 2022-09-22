import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createTheme, ThemeProvider, styled } from '@mui/material';

//import the pages for the router here
import Home from './pages/Home';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

//color palette for the website
const theme = createTheme({
  palette: {
    primary: {
      light: '#ffe6c1',
      main: '#ffe0b2',
      dark: '#b29c7c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f6734b',
      main: '#f4511e',
      dark: '#aa3815',
      contrastText: '#000',
    },
  },
});

//prevents the content from being hidden underneath the NavBar
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          <ThemeProvider theme={theme}>
          <Navbar />
          <Offset></Offset>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
          </ThemeProvider>
        </>
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;
