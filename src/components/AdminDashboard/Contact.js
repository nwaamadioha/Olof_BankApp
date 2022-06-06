import React, {useState, useEffect} from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import axios from "axios";

const ContactBoard = () => {
    const [contacts, setContacts] = useState([])
    const [messageBody, setMessageBody] = useState("")
    const [showMessage, setShowMessage] = useState(false)

    useEffect(()=> {
        axios.get("https://arcane-garden-59577.herokuapp.com/api/contact/")
          .then(res=>setContacts(res.data))
          .catch(error=> console.log(error))
        
        if(contacts.length === 0){
            // setDefault(true)
        }
    })

    const handleClick = async (id) => {
        setShowMessage(!showMessage)
        await axios.get(`https://arcane-garden-59577.herokuapp.com/api/contact/${id}`)
          .then(res=>setMessageBody(res.data.message))
          .catch(error=>console.log(error))
    }
    const handleDelete = async (id) => {
        await axios.delete(`https://arcane-garden-59577.herokuapp.com/api/contact/${id}`)
        setMessageBody("")
    }
    
  return (
    <>    
        <Box mt={1}>
        {/* <Typography variant="h6" align="center">{defaultMessage? "You have no message" : null}</Typography> */}
        {contacts.map((contact, index) => (
            <Stack spacing={1} key={index}>
              <Stack direction="row" spacing={2}>
                <Typography 
                  sx={{
                      cursor: 'pointer', 
                      textDecoration: 'underline',  
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',          
                      '&:hover': {
                      color: 'green',
                      backgroundColor: 'white',
                      },  
                  }} 
                  onClick={()=>handleClick(contact._id)}
                  variant='caption'
                >
                  {contact.email}
                </Typography>
                <Button size="small" variant="text" onClick={()=> handleDelete(contact._id)}> Delete </Button>
              </Stack>
              
            </Stack>
        ))}
        </Box>
        <Typography variant='caption' mt={5}>{showMessage? messageBody : null}</Typography>
    </>
  )
}

export default ContactBoard