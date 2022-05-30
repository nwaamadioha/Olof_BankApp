import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";


const Transfer = () => {
    const [activateButton, setActivateButton] = useState(true);
    const [showTransfer, setShowTransfer] = useState(false);
    const [transferForm, setTransferForm] = useState({
        recieverName: "",
        accountNumber: "",
        amount: "",
        swiftCode: ""
    });
    
    const handleChange = (e) => {
        const {id, value} = e.target
        setTransferForm((prevValue) => {
          return {
            ...prevValue,
            [id]: value
          }
        })
        const {recieverName, accountNumber, amount, swiftCode} = transferForm;
        if (recieverName !== "" && accountNumber !== "" && amount !== "" && swiftCode !==""){
          setActivateButton(false)
        }
        // console.log(transferForm)
    }
    
    const reveal = () => {
        setShowTransfer(!showTransfer)

        setTransferForm({
            recieverName: "",
            accountNumber: "",
            amount: "",
            swiftCode: ""
        })
    }
 

    const makeTransfer = () => {
        console.log(transferForm)
        axios.post("", transferForm)
          .then(res => console.log(res.data))
        setTransferForm({
            recieverName: "",
            accountNumber: "",
            amount: "",
            swiftCode: ""
        })
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
      <Button onClick={reveal} variant="text" align= 'left'>{showTransfer? 'CLOSE' : 'TRANSFER FUNDS'}</Button>
      {showTransfer ? 
      (
     <div>
      <div>
        <TextField
          required
          id="recieverName"
          onChange={handleChange}
          value={transferForm.recieverName}
          label="Reciever Name"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="accountNumber"
          onChange={handleChange}
          value={transferForm.accountNumber}
          label="Account Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

      </div>
      <div>
        <TextField
          required
          id="amount"
          onChange={handleChange}
          value={transferForm.amount}
          label="Amount $"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="swiftCode"
          onChange={handleChange}
          value={transferForm.swiftCode}
          label="Swift-Code"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div >
        <Button variant="contained" color="success" onClick={makeTransfer} disabled={activateButton}>
          Transfer
        </Button>
      </div>
     </div> )
      : null}
    </Box>
  </>
  )
}

export default Transfer