import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BestSelling from '../BestSelling/BestSelling';
import Products from '../Products/Products';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <BestSelling></BestSelling>


        </div>
    );
};

export default Home;