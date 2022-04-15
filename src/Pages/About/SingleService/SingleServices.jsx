import React from 'react';
import { MdOutlineApartment } from 'react-icons/md'
import { FaCocktail } from 'react-icons/fa'
import { GiMushroomHouse, GiWaterPolo } from 'react-icons/gi'
import "./SingleServices.css"
const SingleServices = ({ aboutservice, index }) => {
    const { number, heading } = aboutservice;
    return (
        <div className='singleservices'>
            <p>{index === 0 &&
                <FaCocktail />
            }</p>
            <p>{index === 1 && <GiWaterPolo />}</p>
            <p>{index === 2 && <GiMushroomHouse />}</p>
            <p>{index === 3 && <MdOutlineApartment />}</p>
            <p className='fs-1 fw-bold'>{number}</p>
            <p >{heading}</p>
        </div>

    );
};

export default SingleServices;