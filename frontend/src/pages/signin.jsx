import React, { useState } from "react";
import './signin.css';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Validation from "../SigninValidation";
import axios from "axios";

export const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => {
            const newValues = { ...prev, [name]: value };
            
            // Revalidate on input change
            setErrors(Validation(newValues));
            
            return newValues;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {  // Check if there are no errors
            axios.post("http://localhost:5000/signin", values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    };
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='form-box login'>
                    <form action='' onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='Email' 
                            name="email" onChange={handleInput} required/>
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                            <FaUser className='icons'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' 
                            name="password" onChange={handleInput}required/>
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                            <FaLock className='icons'/>
                        </div>
                        <div className='remember'>
                            <label>
                                <input type='checkbox'/>
                                Remember me
                            </label>
                            <Link to="/register">Forgot Password?</Link>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register'> 
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
};