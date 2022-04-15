import { Button } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import "./SignUP.css"
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import img from "../../../images/logo/image-removebg-preview (11).png"
import auth from '../../../firebase.init';
const SignUP = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [name, setName] = useState('')
    const [customError, setCustomError] = useState('')
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPass(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }
    let element;


    const handleGoolge = e => {
        e.preventDefault()
        signInWithGoogle()
            .then(res => {
                console.log("user created")
            })
    }
    const handleSubmit = e => {
        e.preventDefault()
        const agree = e.target.terms.value;
        if (pass.length !== confirmPass.length) {
            setCustomError("Your Both Password didn't Match")
            return;
        }
        createUserWithEmailAndPassword(email, pass)
            .then(res => {
                sendEmailVerification(email)
            })
        console.log("activate")

    }
    return (
        <div className='register text-start'>
            <h3 className='form-title'>Please Register</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePass} type="password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPass} type="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAgree(!agree)}
                        className={agree ? "text-primary" : "text-black"}
                        type="checkbox" name='terms' label="Agree terms and Conditions" />
                </Form.Group>
                {
                    pass.length !== confirmPass.length && <p className='text-danger text-center fw-bold'>{customError}</p>
                }

                <input
                    disabled={!agree}
                    variant='none' className='submit-btn' type="submit" value="Register" />

                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <div className='or'></div>
                    <p className='text-center mt-3'>Or</p>
                    <div className='or'></div>
                </div>



                <div className='google' onClick={handleGoolge}>
                    <img className='google-pic' src={img} alt="" />
                    Continue with Google
                </div>


                <p className='text-center mt-3 text-black'>New to NewView ? <Link className='navigate-link' to='/login'>Please Login</Link></p>
            </Form>
        </div>
    );
};

export default SignUP;