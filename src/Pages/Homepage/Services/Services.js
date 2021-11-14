import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import Service from './Service';

const services = [
    {
        name: 'PRE-BOOKING',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: "https://cdn.vox-cdn.com/thumbor/4PfsHb323wZlNi_BqSkwxkMm-hE=/0x0:2040x1360/1720x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21973509/vpavic_4243_20201017_0144.0.jpg"

    }
    // {
    //     name: 'EMI-OPPORTUNINY',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    //     img: fluoride
    // },
    // {
    //     name: 'ONE YEAR REPLACEMENT',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    //     img: fluoride
    // },
    // {
    //     name: 'REPAIR SERVICE',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    //     img: fluoride
    // },
    // {
    //     name: 'EXCHANGE OFFERS',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    //     img: cavity
    // },
    // {
    //     name: 'ACCESSORIES',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
    //     img: whitening
    // }
]


const
    Services = () => {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Container >
                    <Typography variant="h6" component="div" sx={{ fontWeight: '600', m: 4 }}>
                        OUR SERVICES
                    </Typography>
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