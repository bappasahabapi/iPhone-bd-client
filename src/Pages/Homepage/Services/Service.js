import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }} >
                <CardMedia
                    className="mt-4"
                    component="img"
                    style={{ width: "300px", height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: "medium" }} color="warning.main">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" className="mt-2" >
                        {description}
                    </Typography>
                </CardContent>
                <button type="disable" className="btn-info fw-bold px-5 py-2 border-0 rounded-3 mb-4"> </button>


            </Card>
        </Grid>
    );
};

export default Service;