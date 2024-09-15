import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrders = () => {

    const { user, token } = useAuth();
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        const url = `https://i-phone-bd-server.vercel.app/orders?email=${user.email}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [])
    return (

        <div>
            <h1>Welcome to your DashBoard <br /> <span className="text-primary">"{user?.displayName}"</span> </h1>
            <br /><br />
            <h2 className="bg-dark text-light">MY Total Orders: {myOrders.length}</h2>
            <TableContainer component={Paper} className="bg-light">
                <Table sx={{}} aria-label="MyOrders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">Varient</TableCell>
                            <TableCell align="right">Make Decision</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((myOrder) => (
                            <TableRow
                                key={myOrder._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {myOrder.buyerName}
                                </TableCell>
                                <TableCell align="right"><b className="text-danger">{myOrder.price}</b></TableCell>
                                <TableCell align="right"><b className="text-primary">{myOrder.serviceName}</b></TableCell>
                                <TableCell align="right">{myOrder.fat}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;