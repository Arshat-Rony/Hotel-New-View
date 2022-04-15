import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <Services></Services>
            <Features></Features>
        </div>
    );
};

export default Home;