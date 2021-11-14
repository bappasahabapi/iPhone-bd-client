import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrderingModal = ({ openOrdering, handleOrderingClose, ordering, date, setOrderSuccess }) => {

    const { name, price } = ordering;
    const { user } = useAuth();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' }
    const [orderingInfo, setOrderingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderingInfo };
        console.log(newInfo);
        newInfo[field] = value;
        setOrderingInfo(newInfo);
    }

    const handleOrderingSubmit = e => {
        alert('submitting');


        const order = {
            ...orderingInfo,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        console.log(order);

        // here is sendinig part to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleOrderingClose();
                }
            });

        e.preventDefault();
    }
    // ---------------------------->
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrdering}
            onClose={handleOrderingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrdering}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Product Name : <b className="text-primary" > {name} 📱</b>
                    </Typography>
                    <form onSubmit={handleOrderingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="buyerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        {/* <Button type="submit" variant="contained">Submit</Button> */}

                        <button type="submit"
                            className="btn-primary w-75  p-3 mt-3 ms-5  fw-bold border-0 rounded-pill"
                        >

                            ✅  Submit 👍
                        </button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderingModal;