import React from 'react';
import AvailableOrders from '../../Orderpage/AvailableOrders/AvailableOrders';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Products></Products>

        </div>
    );
};

export default Home;