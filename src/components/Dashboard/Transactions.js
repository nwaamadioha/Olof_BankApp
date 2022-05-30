import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';


const rows = [
    {
      id:0,
      date: '16 Mar, 2019',
      name: 'Elvis Presley',
      account: '567849930923123',
      type: 'Deposit',
      amount: 45689.44,
      status: 'completed'
    },
]
const Transactions = () => {


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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.account}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
    </>
  )
}

export default Transactions