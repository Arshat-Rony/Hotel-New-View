import React from 'react';
import "./Footer.css"
import img from "../../../src/images/logo/House_real_estate_logo_template-removebg-preview.png"
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer '>
            <div className="footer-container container flex-column flex-md-row d-flex justify-content-between align-items-center">
                <div className="logo-container ">
                    <div className='d-flex justify-content-start align-items-center'>
                        <img src={img} width="100px" alt="" />
                        <p className='logo-text text-white'> New View</p>
                    </div>
                    <div className='icons my-4'>
                        <h4 className='text-white mb-4'>Connet us in social media</h4>
                        <AiFillFacebook />
                        <AiFillTwitterSquare />
                        <BsLinkedin />
                        <FaInstagramSquare />
                        <FaWhatsappSquare />
                    </div>
                </div>

                <form>
                    <input className='ps-3 fw-bold mb-3 ' type="email" name="email" id="email" placeholder='Your Email' />
                    <input id='footer-btn' type="submit" value="Make Reservation" />
                </form>

            </div>
        </footer>
    );
};

export default Footer;