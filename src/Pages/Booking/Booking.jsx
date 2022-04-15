import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Booking = () => {
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [customError, setCustomError] = useState('')
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const handleAdress = e => {
        setAddress(e.target.value)
    }
    const handlePhone = e => {
        setPhone(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }

    let element;

    const handleSubmit = e => {
        e.preventDefault()
        console.log("activate", name, address, phone)

    }
    return (
        <div className='register text-start'>
            <h3 className='form-title'>Please Give Your Info</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={user ? user.email : ""} type="email" readOnly required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Address </Form.Label>
                    <Form.Control onBlur={handleAdress} type="text" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Phone</Form.Label>
                    <Form.Control onBlur={handlePhone} type="number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAgree(!agree)}
                        className={agree ? "text-primary" : "text-black"}
                        type="checkbox" name='terms' label="Agree terms and Conditions" />
                </Form.Group>


                <input
                    disabled={!agree}
                    variant='none' className='submit-btn' type="submit" value="Register" />
            </Form>
        </div>
    );
};

export default Booking;