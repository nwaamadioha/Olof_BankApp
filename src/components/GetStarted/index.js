import React, { useState } from 'react'
import Sidebar from "../Sidebar"
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../Contact";
import {Box,Container, List, ListItem, ListItemText, Typography} from "@mui/material";

const GetStarted = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>  
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
        <Container  sx={{display: "flex", justifyContent:"center"}}>
          <Box mt={10} mb={10}  sx={{width: 1000, p: 2, border: '1px dashed grey'}}>
            <Typography variant="h5" align="center">Documents Required to Open Your Bank Account</Typography>
            <Box>
              <Typography
                sx={{
                  textDecoration: "underline" 
                }} 
                mt={2}
                align="center"
              >
                Company Documentation
              </Typography>
              <List >
                <ListItem>
                    <ListItemText primary="Certificate of incorporation"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Memorandum and articles of association"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Share certificates."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Certificate of incumbency, or certificate of good standing if the company is more than 12 months old."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Corporate structure identifying the ultimate beneficial owners."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Business license (if applicable for some industry like Financial Services)."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Power of attorney (if applicable)."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Declaration of trust (if applicable)."/>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography
                sx={{
                  textDecoration: "underline" 
                }} 
                mt={2}
                align="center"
              >
                Personal documents of each director, shareholder, appointed secretary, authorized signatory and
                ultimate beneficial owner.
              </Typography>
              <List >
                <ListItem>
                    <ListItemText primary="Proof of identity: copy of valid passport (The passport must have the passport holder’s signature and it must match the signature in the application form, certification required however we can support you on this)."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Proof of residential address: original or certified copy of utility bill/bank statement dated within previous 3 months."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Proof of banking history: original or notarized copy of bank reference letter, dated within the previous 3 months, or 6 months’ statements (depending on the chosen bank)."/>
                </ListItem>
                <Typography>*Certification can be done by a bank, a attorney at law, a notary or public officer however we can assist you on this.</Typography>
              </List>
            </Box>
            <Box>
              <Typography
                sx={{
                  textDecoration: "underline" 
                }} 
                mt={2}
                align="center"
              >
                Business evidence (upon bank request)
              </Typography>
              <List >
                <ListItem>
                    <ListItemText primary="Invoices, contracts, agreements of your existing company."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Service Provider Certification with your prosperous partners/ suppliers."/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Any documents proving your qualifications in the business scope."/>
                </ListItem>
              </List>
            </Box>

          </Box>
        </Container>
        <Contact />
        <Footer/>
    </>
  )
}

export default GetStarted