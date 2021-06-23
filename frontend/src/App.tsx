import { Heading } from '@chakra-ui/layout';
import { VStack, Button, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import BlogComponent from './components/BlogComponent';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'

interface Values {
  name: string
}

function App() {

 const { colorMode, toggleColorMode } = useColorMode();

 
// const validateName = (name: string) => {
//   let error;
//   if (!name) {
//       error = "Name is required"
//   } else if (name.toLowerCase() !== 'naruto') {
//       error = "Jeez! You're not a fan 😱"; 
//   }
//   return error;
// }


  return (
    <Router>
      <IconButton
        icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true}
        aria-label="" 
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}/>
      <main>
        <Route path="/login" component={Login} />
      </main>
    </Router>
  );
}

export default App;
