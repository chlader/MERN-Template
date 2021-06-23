import { Heading } from '@chakra-ui/layout';
import { VStack, Button, IconButton, useColorMode, HStack } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import BlogComponent from './components/BlogComponent';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

 const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <VStack p={4}>
        <IconButton
          icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound={true}
          aria-label=""
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
      </VStack>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/home" component={BlogComponent} />
      </main>
    </Router>
  );
}

export default App;
