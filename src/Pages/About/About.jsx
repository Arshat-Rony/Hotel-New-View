import React from 'react';
import Hero from '../Home/Hero/Hero';
import SingleServices from './SingleService/SingleServices';
import img1 from "../../../src/images/slider/1.jpg"
import img2 from "../../../src/images/slider/8.jpg"
import img3 from "../../../src/images/slider/9.jpg"
import './About.css'
import Feature from '../Home/Feature/Feature';
const data = [
    { id: 1, number: 222, heading: 'Cocktails/day' },
    { id: 2, number: 4, heading: 'pools' },
    { id: 3, number: 89, heading: 'Rooms' },
    { id: 4, number: 23, heading: 'Apartments' },
]
const featuredata = [
    { id: 1, heading: "Single room", price: "150$", img: img1 },
    { id: 2, heading: "Double suit", price: "250$", img: img2 },
    { id: 3, heading: "Delux room", price: "300$", img: img3 },
]
const About = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="about-services-container">
                <div className="about-service-box d-flex justify-content-around align-items-center flex-column">
                    <div className="about-text">
                        <div className='float my-5 '></div>
                        <h2 className='fw-bold'>Our Milestone</h2>
                        <p className='px-5'>A comfort zone is a psychological state in which things feel familiar to a person and they are at ease and (perceive they are) in control of their environment, experiencing low levels of anxiety and stress.</p>
                    </div>
                    <div className="about-services">
                        {
                            data.map((service, index) => <SingleServices
                                key={service.id}
                                aboutservice={service}
                                index={index}

                            >
                            </SingleServices>)
                        }
                    </div>
                </div>
                <div className="about-features-container">
                    <div className="float my-4"></div>
                    <h1 className='mb-3'>Our Hotel</h1>
                    <div className="about-features">
                        {
                            featuredata.map(room => <Feature
                                key={room.id}
                                room={room}
                            ></Feature>)
                        }
                    </div>
                </div>
                <div className="about-client-container">
                    <div className="about-client">
                        <div className="float my-4"></div>
                        <h1 className='fw-bold my-4'> What Clients Say</h1>
                        <p className='text-black'>The most common type of accommodation in the hotel industry, a hotel is defined as an establishment that offers overnight accommodation, meals and other services. They are mainly aimed at travellers or tourists, although locals may also use them. Hotels provide private rooms, and almost always have en-suite bathrooms.</p>
                        <p className='text-black'>Michael Jordan,<span className='fw-bold'>Client</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;