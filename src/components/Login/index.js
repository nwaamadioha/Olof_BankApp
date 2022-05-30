import React, { useState } from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton} from "./LoginElements";
// import axios from "axios";


const Login = () => {

    const [formField, setFormField] = useState({
        userID: "",
        password:""
    })
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormField((prevValue) => {
            return {
                ...prevValue,
                [id]: value
            }
        })
       
    }
    const handleClick = (e) => {
        e.preventDefault();
        // console.log(formField)
        // axios.post("", formField)
        //   .then()
    }
    // value={form.password} 
  return (
    <>
        <Container>
        <Icon to="/">Home</Icon>

            <FormWrap>
                <FormContent>
                    <Form action='#'>
                        {/* <Icon to="/">olofbank</Icon> */}
                        <FormH1>Log in to your account</FormH1>
                        <FormLabel htmlFor='for'>User ID</FormLabel>
                        <FormInput onChange={handleChange} id='userID' value={formField.userID} type='number' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput onChange={handleChange} id='password' value={formField.password} type='password' required />
                        <FormButton onClick={handleClick} type='submit'>Continue</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Login