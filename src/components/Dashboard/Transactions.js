import React, {useContext, useEffect, useState, useRef} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.js"



const Transactions = () => {
  const {user} = useContext(AuthContext);
  // const [isDone, setIsDone] = useState(false);
  const isDone = useRef(false)
  const [rows, setRows] = useState([]);

  //Get all transaction ids from the user
  useEffect(() => {
    const transactions = user.transactions
 
    if(!isDone.current) {
      transactions.map((transaction) => ( 
      axios.get(`https://arcane-garden-59577.herokuapp.com/api/transactions/${transaction}`)
        .then(
          res => {
            setRows((prevValue) => [ 
              ...prevValue,
              res.data
            ]
            )
            // console.log(res.data)
          }
        ) 
        .catch(error => console.log(error))
      ));
    }
    isDone.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Transaction History
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>   
          {rows.map((row, i) => (
              <TableRow key={i}>  
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.recieverName}</TableCell>
                <TableCell>{row.accountNumber}</TableCell>
                <TableCell>{new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(row.amount)}</TableCell>
                <TableCell>{row.transactionType}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default Transactions
