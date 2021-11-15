import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import Service from './Service';
import { Link } from 'react-router-dom';

const services = [
    {
        name: 'PRE-BOOKING',
        description: 'we take pre bokking which smart phones are upcomming',
        img: "https://img.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg?size=338&ext=jpg"

    },
    {
        name: 'EMI-OPPORTUNINY',
        description: 'We have monthly yearly emi opportunities that helps customers',
        img: "https://st4.depositphotos.com/2547605/40318/v/600/depositphotos_403181686-stock-illustration-emi-equated-monthly-installment-acronym.jpg"
    },
    {
        name: 'ONE YEAR REPLACEMENT',
        description: 'You have the power to replace your phone in a year if software damage happens',
        img: "https://cdn5.vectorstock.com/i/1000x1000/97/29/1-year-warranty-button-vector-1219729.jpg"
    },
    {
        name: 'REPAIR SERVICE',
        description: 'We have experience people they can repair your phone with a very low cost',
        img: "https://img.freepik.com/free-vector/maintenance-concept-illustration_114360-391.jpg?size=626&ext=jpg"
    },
    {
        name: 'EXCHANGE OFFERS',
        description: 'You can exchange your old phone and easily take an brand new phone ',
        img: "https://image.shutterstock.com/image-vector/buying-smart-phone-dollars-cash-260nw-695067625.jpg"
    },
    {
        name: 'ACCESSORIES',
        description: 'All accessories are present in our shop including cover headphones',
        img: "https://static.vecteezy.com/system/resources/previews/000/100/101/non_2x/phone-accessories-vector.jpg"
    }
]


const
    Services = () => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Link to='/order'>
                        <button className="btn btn-warning fw-bold rounded mt-5 px-5 ">Buy Now ▶</button>
                    </Link>

                    <Typography variant="h4" component="div" className="fw-bold m-4 " >
                        Services We Provides
                    </Typography >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service

                                key={service.name}
                                service={service}
                            >

                            </Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        );
    };

export default Services;