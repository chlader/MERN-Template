import { Button, Heading, HStack, useToast, VStack } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { InputComponent } from "../components/InputComponent"

const Login = ({ history }: { location: any, history: any}) => {

    const dispatch = useDispatch();
    
    const userLogin = useSelector((state: any) => state.userLogin);
    const { error, userInfo } = userLogin; // TODO: Set up vallidation

    const toast = useToast();

    const redirect = '/home';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
        if (error) {
            toast({
                title: 'Invalid email or password',
                status: 'error',
                isClosable: true
            })
        }
    }, [history, userInfo, redirect, error, toast]);

    const submitHandler = ({ email, password }: { email: string, password: string }) => {
        dispatch(login(email, password))
    }

    return (
        <VStack p={4}>
            <Heading pb={8}
            fontWeight="extrabold"
            size="2xl"
            bgGradient="linear(to-r, blue.700, blue.500, blue.400)"
            bgClip="text"
            >
                Log In
            </Heading>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    actions.setSubmitting(false);
                    submitHandler(values);
                })
            }}>
                {(props: any) => (
                    <Form>
                        <Field name="email" component={InputComponent} width={[300, 400, 500]} />
                        <div style={{marginTop: '25px'}}/>
                        <Field name="password" component={InputComponent} />
                        <HStack alignSelf="center" mt={4}> 
                            {/* TODO: FIGURE OUT HOW TO CENTER THESE BUTTONS */}
                            {/* <Button colorScheme="gray">Sign Up</Button> */}
                            <Button colorScheme="blue" isLoading={props.isSubmitting} type="submit">Log In</Button>
                        </HStack>
                    </Form>
                )}
            </Formik>
        </VStack>
    )
}

export { Login };