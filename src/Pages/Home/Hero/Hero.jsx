import React from 'react';
import pic1 from "../../../images/slider/5.jpg"
import pic2 from "../../../images/slider/6.jpg"
import pic3 from "../../../images/slider/7.jpg"
import { HiChevronDown } from "react-icons/hi";
import "./Hero.css"
import { useLocation } from 'react-router-dom';
import img from "../../../images/about/2.jpg"

const Hero = () => {
    const location = useLocation()


    return (
        <div className='d-flex flex-column justify-content-between align-items-center flex-md-row hero-container'>

            <div className={`hero-text ${location.pathname === "/about" ? "my-5 py-5 md-mb-4 md-my-0" : "my-5 py-5"}  px-3`}>
                <div className={`float mb-4`}></div>
                <h3>A place to remember</h3>
                <p className='text-black'>Tourism, the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services. As such, tourism is a product of modern social arrangements, beginning in western Europe in the 17th century, although it has antecedents in Classical antiquity.</p>
                <p className='text-black'><HiChevronDown /> We offer Our customer our best services</p>
                <p className='text-black'><HiChevronDown />Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <button className="banner-btn">Read More</button>
            </div>
            <div className="hero-img mt-5 mt-md-3">
                {
                    location.pathname === '/about' ?
                        <img className='w-100 d-block pt-md-5 mt-md-5' style={{ height: "400px" }} src={img} alt="" />
                        :
                        <>
                            <img className='' id='img-1' src={pic1} alt="" />
                            <img className='' id='img-2' src={pic2} alt="" />
                            <img className='' id='img-3' src={pic3} alt="" />
                        </>
                }
            </div>

        </div>
    );
};

export default Hero;