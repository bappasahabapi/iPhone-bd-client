import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import BookingModal from '../Appointment/BookingModal/BookingModal';


const Booking = ({ booking, date }) => {
    const { name, time, space, variant } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (

        <>

            <Grid item xs={12} sm={6} md={4}  >

                <Paper elevation={3} sx={{ py: 5, mt: 4 }} className="bg-dark " >
                    <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 600 }} style={{ color: '#19BFD1' }}>
                        {name}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="h6" gutterBottom component="div">
                        {variant}
                    </Typography>
                    <Typography style={{ color: '#F2F8F7' }} variant="caption" display="block" gutterBottom>
                        {space} PICES AVAILABLE ONLY
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ background: '#19BFD1' }}>PRE-BOOKING / ORDERING </Button>
                </Paper>
            </Grid >
            {/* <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}

            >


            </BookingModal> */}

        </>

    );
};

export default Booking;