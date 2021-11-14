import React from 'react';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OrderingModal from '../OrderingModal/OrderingModal';


const Ordering = ({ ordering, date, setOrderSuccess }) => {
    const { name, price, space, variant, img } = ordering;
    const [openOrdering, setOpenOrdering] = React.useState(false);
    const handleOpenOrdering = () => setOpenOrdering(true);
    const handleOrderingClose = () => setOpenOrdering(false);
    return (

        <>

            <Grid item xs={12} sm={6} md={4}  >

                <Paper elevation={3} sx={{ py: 5, mt: 4 }} className="bg-dark " >
                    <CardMedia
                        className="w-75 mx-auto mb-3"
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />

                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 600 }} style={{ color: '#19BFD1' }}>
                        {name}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="h6" gutterBottom component="div">
                        {price}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="h6" gutterBottom component="div">
                        {variant}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="caption" display="block" gutterBottom>
                        {space} PICES AVAILABLE ONLY
                    </Typography>
                    <Button onClick={handleOpenOrdering} variant="contained" style={{ background: '#19BFD1' }}>ORDERING ▶ <span className="text-dark">  {name} </span> </Button>
                </Paper>
            </Grid >
            <OrderingModal
                date={date}
                ordering={ordering}
                openOrdering={openOrdering}
                handleOrderingClose={handleOrderingClose}
                setOrderSuccess={setOrderSuccess}

            >

            </OrderingModal>

        </>

    );
};

export default Ordering;