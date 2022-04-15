import { Carousel } from 'react-bootstrap';
import React from 'react';
import pic1 from "../../../images/slider/bg-1.jpg"
import pic2 from "../../../images/slider/bg-3.jpg"
import pic3 from "../../../images/slider/4.png"
import "./Banner.css"
import { HiChevronDown } from "react-icons/hi";

const newDate = new Date()
const month = newDate.toLocaleString('default', { month: 'long' })
const Banner = () => {
    return (
        <div >
            <div>
                <Carousel fade controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                        />
                        <Carousel.Caption className=' carousel-text'>
                            <div className='float'></div>
                            <h1 className='mt-3'>A Place to remember</h1>
                            <p>Tours give you the opportunity to see a lot, within a time frame. You get to see a place, its culture, treasures, and big sites, taste the cuisine, blend with the locals and then you're off again. Essentially, you get to sample the very best of a place and what it has to offer.</p>
                            <button className='banner-btn'>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src={pic2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className=' carousel-text'>
                            <div className='float'></div>
                            <h1 className='mt-3'>If World is a book then traveller knows how to write it</h1>
                            <p>Tours give you the opportunity to see a lot, within a time frame. You get to see a place, its culture, treasures, and big sites, taste the cuisine, blend with the locals and then you're off again. Essentially, you get to sample the very best of a place and what it has to offer.</p>
                            <button className='banner-btn'>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className=' carousel-text' >
                            <div className='float'></div>
                            <h1 className='mt-3'>Take Vacation from Vocation</h1>
                            <p>Tours give you the opportunity to see a lot, within a time frame. You get to see a place, its culture, treasures, and big sites, taste the cuisine, blend with the locals and then you're off again. Essentially, you get to sample the very best of a place and what it has to offer.</p>
                            <button className='banner-btn'>Read More</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="check-in-out-container d-flex flex-column justify-content-center align-items-center flex-md-row">
                <div className="check-box">
                    <div>
                        <p>Check in</p>
                        <p className='text-white'>{`${newDate.getDate()} ${month}`}</p>
                    </div>
                    <HiChevronDown />

                </div>
                <div className="check-box">
                    <div>
                        <p>Check Out</p>
                        <p className='text-white'>{`${newDate.getDate() + 1} ${month}`}</p>
                    </div>
                    <HiChevronDown />
                </div>
                <div className="check-box">
                    <div>
                        <p>Adults</p>
                        <p className='text-white'>02</p>
                    </div>
                    <HiChevronDown />
                </div>
                <div className="check-box">
                    <div>
                        <p>Children</p>
                        <p className='text-white'>01</p>
                    </div>
                    <HiChevronDown />
                </div>
                <div id='check-box-btn' className="check-box">
                    <p className='text-white text-center'>Book Now</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;