//To update the user Password

import React, {useState} from 'react'
import {Box,Button, Stack, TextField, Typography} from "@mui/material";
import axios from 'axios';

import { AuthContext } from '../../context/AuthContext.js';


const Password = () => {
    const { user } = React.useContext(AuthContext);
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [done, setDone] = useState(true)


    const handleClick = (e) => {
        e.preventDefault();
        axios.put(`https://arcane-garden-59577.herokuapp.com/api/users/password/${user._id}`, {password: password})
          .then(res=>setMessage(res.data))
          .catch(error=>console.log(error))
    }
  return (
    <>
        <Box mt={1}>
            {message?
            <Typography variant="caption">{message} </Typography> :
            <Stack spacing={2}>
                <TextField
                    required
                    id="newPassword"
                    size="small"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value); if(password !== "") {setDone(false)}}}
                    label="New Password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                />
                <Button size="small" variant="text" onClick={handleClick} disabled={done}>SAVE</Button>
            </Stack>}
        </Box>
    </>
  )
}

export default Password