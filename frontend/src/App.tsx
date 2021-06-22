import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/layout';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import { Login } from './components/Login';

function App() {

 const { colorMode, toggleColorMode } = useColorMode();
 const [name, setName] = useState('');



  return (
    <VStack p={4}>
      <IconButton
        icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true}
        aria-label="" 
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}/>
      <Heading pb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, blue.700, blue.500, blue.400)"
        bgClip="text"
      >
        Log In
      </Heading>
      { /* <TodoList todos={ todos } deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} /> */}
      <Login name={name}/>
    </VStack>
  );
}

export default App;
