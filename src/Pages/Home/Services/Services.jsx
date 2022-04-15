import React from 'react';
import { GiBedLamp } from "react-icons/gi"
import { MdOutlinePool } from "react-icons/md"
import { FaBed } from "react-icons/fa"
import './Services.css'
const Services = () => {
    return (
        <div className='services-container py-5'>
            <div className=" services">
                <div className="float mb-5"></div>
                <h3 className='service-heading'>Infinity Pool</h3>
                <p>A swimming pool is a large hole in the ground that has been made and filled with water so that people can swim in it. </p>

                <div className="services-box d-flex jusitfy-content-between align-items-center flex-column flex-md-row">
                    <div className="service">
                        <MdOutlinePool />
                        <p className='mt-3'>Pool Beachbar</p>
                    </div>
                    <div className="service">
                        <GiBedLamp />
                        <p className='mt-3'>Infinity Pool</p>
                    </div>
                    <div className="service">
                        <FaBed />
                        <p className='mt-3'>SunBeds</p>
                    </div>
                </div>
                <button className='banner-btn mt-5'>Read More</button>
            </div>

        </div>
    );
};

export default Services;