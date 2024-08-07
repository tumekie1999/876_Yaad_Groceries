import React from 'react';
import './app.css';
import { FaLock, FaUser } from 'react-icons/fa';

function App () {

    // const navigate = useNavigate();
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='form-box login'>
                    <form action=''>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='Email/Username' required/>
                            <FaUser className='icons'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                            <FaLock className='icons'/>
                        </div>
                        <div className='remember'>
                            <label>
                                <input type='checkbox'/>
                                Remember me
                            </label>
                            <a href='#'> Forgot password?</a>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register'>
                            <p>Don't have an account?
                                {/* <a href='#' onClick={() => navigate("/register")}> Register</a>   */}
                            </p>   
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
    
}

export default App;