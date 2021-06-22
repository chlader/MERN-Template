import { Heading } from '@chakra-ui/layout';
import { VStack, Button, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import BlogComponent from './components/BlogComponent';

interface Values {
  name: string
}

function App() {

 const { colorMode, toggleColorMode } = useColorMode();

 
const validateName = (name: string) => {
  let error;
  if (!name) {
      error = "Name is required"
  } else if (name.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"; 
  }
  return error;
}


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
      <Formik
        initialValues={{
          name: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
          }, 500)
        }}>
          {(props: any) => (
            <Form>
              <Field validate={validateName} name="name" component={InputComponent} />
              <Button mt={4} colorScheme="blue" isLoading={props.isSubmitting} type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
        <BlogComponent />
    </VStack>
  );
}

export default App;
