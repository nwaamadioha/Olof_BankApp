import React, {useState} from 'react'
import { Box, TextField, Typography, Grid, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from "axios";



const Contact = () => {
  const [cform, setCForm] = useState({
      name: "",
      email: "",
      message: ""
  });
  const [done, setDone] = useState(true)
  const [message, setMessage] = useState("")
  const handleChange = (e) => {
      const {id, value} = e.target;
      setCForm((prevValue) => {
          return {
            ...prevValue,
            [id] : value
          }
        });
      const {name, email, message} = cform;
      if (name !== "" && email !== "" && message !== ""){
        setDone(false)
      }
   }
   const handleClick = async (e) => {
       e.preventDefault();
       await axios.post("https://web-production-1d71.up.railway.app/api/contact", cform)
         .then(
           res => setMessage(res.data)
       )
       .catch(error => console.log(error))
       setCForm({
        name: "",
        email: "",
        message: ""
       });
   }
   
  return (
    <>
    <Box 
      sx={{ flexGrow: 1, mb:10 }}  
      id='contact'
    >
      <Typography mt={10} variant="h5" align="center" color="#010606" gutterBottom>
        CONTACT US
      </Typography>
      <Typography mt={2} variant="body1" align="center" color="#010606" gutterBottom>
        Reach us by filling the form below or contacting us through other provided means of communication
      </Typography>
      <Grid mt={5} container >
        <Grid container direction="column" justifyContent="center" alignItems="center">
          <Box 
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' },}} 
            noValidate 
            autoComplete="off"  
          > 
            <Typography align="right" variant="h6" color="green">{message? message : null}</Typography>
            <div>
              <TextField
                required
                id="name"
                value={cform.name}
                label="Your Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                required
                id="email"
                value={cform.email}
                label="Your Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                id="message"
                value={cform.message}
                label="Your Message"
                multiline
                rows={4}
                onChange={handleChange}
              />
            </div>
          </Box>
          <Button disabled={done} onClick={handleClick} variant="contained" endIcon={<SendIcon />}>
           Send
          </Button>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Contact