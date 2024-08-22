import React, {useState} from "react";
import './register.css';
import { Link, useNavigate } from "react-router-dom";
import Validation from "../RegisterValidation";
import axios from 'axios';

export const Register = () => {
    const [values, setValues] = useState({
        name: '',
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
            axios.post("http://localhost:5000/register", values)
            .then(res => {
                navigate('/signin');
            })
            .catch(err => console.log(err));
        }
    };
    
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='form-box register'>
                    <form action='' onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='Fullname' 
                            name="name" onChange={handleInput} required/>
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='Email' 
                            name="email" onChange={handleInput} required/>
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' 
                            name="password" onChange={handleInput}required/>
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <button type='submit'>Register</button>
                        <div className='Login'>
                            <Link to="/signin">Already have an account?</Link>   
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    )
};