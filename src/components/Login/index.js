import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.js';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from "./LoginElements";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
    const [credentials, setCredentials] = useState({
        userID: "",
        password: "",
    });
    const {loading, error, dispatch} = useContext(AuthContext);
    const  navigate = useNavigate()

    const handleChange = (e) => {
        const {id, value} = e.target;
        setCredentials((prevValue) => {
            return {
                ...prevValue,
                [id]: value
            } 
        });
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login", credentials)
            if(res.data.details.isAdmin){
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details})
                navigate("/admin")
            }else{
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details})
                navigate("/dashboard")
            }

        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
        }
    };

  return (
    <>
        <Container>
        <Icon to="/">Home</Icon>

            <FormWrap>
                <FormContent>
                    <Form >
                        {/* <Icon to="/">olofbank</Icon> */}
                        <FormH1>Log in to your account</FormH1>
                        <FormLabel htmlFor='for'>User ID</FormLabel>
                        <FormInput onChange={handleChange} id='userID' value={credentials.userID} type='number' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput onChange={handleChange} id='password' value={credentials.password} type='password' required />
                        <FormButton disabled={loading} onClick={handleClick} type='submit'>Login</FormButton>
                        {error && <Text>{error.message}</Text>}
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Login