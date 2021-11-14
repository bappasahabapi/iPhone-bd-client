import * as React from 'react';
import { Grid } from '@mui/material';
import MyOrders from '../Dashboard/MyOrders/MyOrders';
import PayMethod from '../Dashboard/PayMethod/PayMethod';

const DashboardHome = () => {
    return (
        <Grid className="ms-5" >
            <Grid item xs={12} sm={11}>
                <MyOrders > </MyOrders>

            </Grid>
        </Grid>
    );
};

export default DashboardHome;
