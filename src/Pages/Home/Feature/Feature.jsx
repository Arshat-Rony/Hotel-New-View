import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai"
import "./Feature.css"

const Feature = ({ room }) => {
    const { heading, price, img } = room;
    const location = useLocation()
    return (
        <div className='feature-container'>
            {
                location.pathname === '/home' && <button id='price-btn' className='banner-btn'>From {price} /night</button>
            }
            {
                location.pathname === "/about"
                &&
                <div className='text-start p-3 about-box'>

                    <p className='text-muted '><AiFillCheckCircle className='me-2 fs-3' style={{ color: '#CB8670 ' }} />
                        We serve including Front Office Management, Back Office Management, House-keeping services,
                    </p>
                    <p className='text-muted '><AiFillCheckCircle className='me-2 fs-3' style={{ color: '#CB8670 ' }} />
                        We provide services, treatment, advice or instruction, rendered by or on behalf of hotel Management
                    </p>
                    <p className='text-muted '><AiFillCheckCircle className='me-2 fs-3' style={{ color: '#CB8670 ' }} />
                        We provide barbers, beauticians, manicurists, shampooers, massage therapists, aerobics
                    </p>
                </div>
            }

            <img className={location.pathname === "/about"
                && "p-3"} src={img} alt="" />
            {
                location.pathname === "/home" &&
                <div className="feature-text">
                    <div className='float my-4'></div>
                    <h4>{heading}</h4>
                    <p>A portion of space within a building or other structure, separated by walls or partitions from other parts: a dining room.</p>
                    <button id='feature-btn' className='banner-btn py-3'>Book Now</button>
                </div>
            }
        </div>
    );
};

export default Feature;