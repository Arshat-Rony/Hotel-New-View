import React from 'react';
import "./Descbox.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import img1 from "../../../images/slider/1.jpg"
import img2 from "../../../images/slider/8.jpg"
import img3 from "../../../images/slider/9.jpg"
const data = [
    { id: 1, heading: "Single room", price: "150$", img: img1 },
    { id: 2, heading: "Double suit", price: "250$", img: img2 },
    { id: 3, heading: "Delux room", price: "300$", img: img3 },
]
const Descbox = () => {
    const { serviceid } = useParams()
    const newService = data.find(service => service.id === parseInt(serviceid))
    const { heading, price, img } = newService;
    const navigate = useNavigate()

    return (
        <div className='descbox '>
            <img src={img} alt="" />
            <h1 className='mt-4 fw-bold'>{heading}</h1>
            <p className='text-dark fw-bold'>Price : {price} /Night</p>

            <button onClick={() => navigate("/booking")} className='banner-btn mb-4'>Proceed to checkout</button>

        </div>
    );
};

export default Descbox;