import React from 'react';
import { Container, Grid } from '@mui/material';
// import iphone from '../../../images/iphone.jpeg';
import Calender from '../../Sharedpage/Calender/Calender';

const OrderHeader = ({ date, setDate }) => {
    return (

        <Container>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    {/* <img className="mt-5" style={{ width: '50%' }} src={iphone} alt="" /> */}
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}>

                    </Calender>
                </Grid> */}

            </Grid>
        </Container>
    );
};

export default OrderHeader;