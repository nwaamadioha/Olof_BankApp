import React, {useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from "axios";




const CreateUser = () => {
    const [done, setDone] = useState(true);
    const [message, setMessage] = useState("")
    const [userF, setUserF] = useState({
        userID: "",
        email:"",
        firstName:"",
        lastName: "",
        accountNumber:"",
        accountBalance:"",
    })

    const handleChange = (e) => {
        const {id, value} = e.target;
        setUserF((prevValue) => {
            return {
                ...prevValue,
                [id]: value
            }
        })
        const {userID, email, firstName, lastName, accountNumber, accountBalance} = userF;
        if (userID !== "" && email !== "" && firstName !== "" && lastName !=="" && accountNumber !=="" && accountBalance !==""){
          setDone(false)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post("https://web-production-1d71.up.railway.app/api/auth/register", userF)
          .then(res => setMessage(res.data))
          .catch(error => console.log(error))
        
        setUserF({
            userID: "",
            email:"",
            firstName:"",
            lastName: "",
            accountNumber:"",
            accountBalance:"",
        })
        setDone(true)
    }
    
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <Typography color="green" variant="caption" mb={5}> {message? message : null}</Typography>
        <div>
          <div>
            <TextField
              required
              id="userID"
              type="number"
              onChange={handleChange}
              value={userF.userID}
              label="User ID"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              id="firstName"
              onChange={handleChange}
              value={userF.firstName}
              label="First Name"
              InputLabelProps={{
               shrink: true,
              }}
            />
            <TextField
              required
              id="lastName"
              onChange={handleChange}
              value={userF.lastName}
              label="Last Name"
              InputLabelProps={{
                shrink: true,
              }}
            />

          </div>
          <div>
          <TextField
              required
              id="email"
              onChange={handleChange}
              value={userF.email}
              label="Email"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <TextField
              required
              id="accountNumber"
              onChange={handleChange}
              value={userF.accountNumber}
              label="Account Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          <TextField
              required
              id="accountBalance"
              onChange={handleChange}
              value={userF.accountBalance}
              label="Account Balance $"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

          </div>
          <div >
            <Button variant="contained" color="success" onClick={handleClick} disabled={done}>
              CREATE USER
            </Button>
          </div>
        </div>

      </Box>
    </>
  )
}

export default CreateUser