import { Button, Divider, Heading, VStack } from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { InputComponent } from "../components/InputComponent"

const Login = ({ location, history }: { location: any, history: any}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    
    const userLogin = useSelector((state: any) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        dispatch(login(email, password));
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
            onSubmit={submitHandler}>
                {(props: any) => (
                    <Form>
                        <Field name="email" component={InputComponent} width={[300, 400, 500]} />
                        <div style={{marginTop: '25px'}}/>
                        <Field name="password" component={InputComponent} />
                        <Button mt={4} colorScheme="blue" isLoading={props.isSubmitting} type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </VStack>
    )
}

export { Login };