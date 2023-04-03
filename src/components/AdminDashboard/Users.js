import React, {useEffect, useState} from 'react'
import {Button, Checkbox, IconButton, Stack, TextField, Typography, TableRow, TableHead, TableCell, TableBody, Table }from '@mui/material';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Users = () => {
  const [userid, setUserId] = useState("")
  const [rows, setRows] = useState([]);
  const [options, setOptions] = useState(false)
  const [transactionsID, setTransactionsID] = useState([])
  const [status, setTransactionStatus] = useState("")
  const [message, setMessage] = useState("")
  const [showEditField, setShowEditField] = useState(false)
  
  //get the id of the second transaction
  const transactionID = transactionsID[1]

  useEffect(() => {
      axios.get("https://web-production-1d71.up.railway.app/api/users")
        .then(res => setRows(res.data))
        .catch(error => console.log(error))
  });

  const handleChange = (id, trans) => {
    setUserId(id);
    setOptions(true)
    setTransactionsID(trans)
  };

  const handleDelete = () => {
    axios.delete(`https://web-production-1d71.up.railway.app/api/users/${userid}`)
      .then(res=>console.log(res.data))
      .catch(error=>console.log(error))
    setOptions(false)
  };

  const handleEdit = () => {
      getTransactions()
      setShowEditField(true)
  };

  const getTransactions = () => {
      if (transactionsID.length > 1)
      axios.get("https://web-production-1d71.up.railway.app/api/transactions/" + transactionID)
        .then(res => setTransactionStatus(res.data.status))
        .catch(error => console.log(error))
      // else{
      //   setMessage("No transaction in this User's Account")
      // }
  };

  const handleStatusChange = (e) => {
      setTransactionStatus(e.target.value)
  }
  const saveStatus = () => {
      axios.put(`https://web-production-1d71.up.railway.app/api/transactions/${transactionID}`, {status: status})
        .then(res => setMessage(res.data))
        .catch(error => console.log(error))
      setTransactionStatus("")
      setShowEditField(false)
  }
  return (
    <>
      <Stack mb={5} direction="row" spacing={2}>
        <Typography component="h2" variant="h6" color="inherit" gutterBottom>
          USERS
        </Typography>

        {options?     
        (<div>
          <IconButton aria-label="delete" size="small" color="error" onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" size="small" color="info" onClick={handleEdit}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>) : null}

        {showEditField? 
        (<div>
        <TextField
          required
          size="small"
          id="transactionStatus"
          onChange={handleStatusChange}
          value={status}
          label="Transaction Status"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="text" onClick={saveStatus}>SAVE</Button>
        {/* <Button variant="text" onClick={() => setShowEditField(false)}>CANCEL</Button> */}
        </div>) : null}
        <Typography mt={5}variant="caption">{message? message: null}</Typography>
        {options? 
        <Button variant="text" onClick={() => {setOptions(false); setShowEditField(false)}}>CLOSE</Button>
        : null}
      </Stack>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Acc/Number</TableCell>
            <TableCell>Acc/Balance</TableCell>
            <TableCell>Trans/Count</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>   
          {rows.map((row, i) => (
              <TableRow key={i}> 
                <TableCell><Checkbox onChange={() => handleChange(row._id, row.transactions)}/></TableCell>
                <TableCell>{row.userID}</TableCell>
                <TableCell>{row.firstName} {row.lastName}</TableCell>
                <TableCell>{row.accountNumber}</TableCell>
                <TableCell>${new Intl.NumberFormat().format(row.accountBalance)}</TableCell>
                <TableCell>{row.transactionCount}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default Users