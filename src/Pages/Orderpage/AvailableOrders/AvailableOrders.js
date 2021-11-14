import { Alert, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Ordering from '../Ordering/Ordering';



const AvailableOrders = ({ date }) => {

    const [orderSuccess, setOrderSuccess] = useState(false)


    const [orderings, setOrderings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/iphones')
            // fetch('./orderings.json')
            // fetch('https://aqueous-reef-70969.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOrderings(data))

    }, [])


    return (


        <Container>
            <h3 className="mt-5" >AVAILABLE  <span className="text-primary ">iPHONE</span>  OF THIS MONTH</h3>

            {/* <h3>Available Products on <b className="text-primary">{date.toDateString()}</b></h3> */}
            {orderSuccess && <Alert severity="success"> 🟢🟢🟢 Your Order is succecssfullt added 😁😁</Alert>}

            <Grid container spacing={2}>
                {
                    orderings.map(ordering => <Ordering
                        key={ordering.id}
                        ordering={ordering}
                        date={date}
                        setOrderSuccess={setOrderSuccess}
                    >

                    </Ordering>)
                }

            </Grid>
        </Container >
    );
};


export default AvailableOrders;