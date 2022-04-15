import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import img from "../../../images/logo/image-removebg-preview (11).png"
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }

    const handleGoolge = e => {
        e.preventDefault()
        signInWithGoogle()
            .then(res => {
                console.log("user created")
            })
    }
    const resetPass = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast("Check mail to reset Password")
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }
    return (
        <div className='register text-start'>
            <h3 className='form-title mb-4'>Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePass} type="password" required />
                </Form.Group>
                <small id='pass' onClick={resetPass}>Forget Password</small>

                <input variant='none' className='submit-btn' type="submit" value="Login" />

                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <div className='or'></div>
                    <p className='text-center mt-3'>Or</p>
                    <div className='or'></div>
                </div>



                <div className='google' onClick={handleGoolge}>
                    <img className='google-pic' src={img} alt="" />
                    Continue with Google
                </div>


                <p className='text-center mt-3 text-black'>New to NewView ? <Link className='navigate-link' to='/signup'>Please Register</Link></p>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;