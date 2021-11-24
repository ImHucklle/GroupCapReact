import React, {useState} from 'react';
import axios from 'axios';
import './Registration.scss';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstant';
import { withRouter } from "react-router-dom";

function Registration(props) {
    const [state , setState] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        phonenumber: "",
        
    })
    const handleChange = (e) => {
        const {id , value} = e.target  
        console.log(e) 
        setState(prevState => ({
            prevState,
            [id] : value
        }))
    }

   

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login');
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
    }

    return(
      <div className="registration">
            <form>
                    <input type="firstname" 
                       className="form-control" 
                       id="firstname" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter your first name" 
                       value={state.firstname}
                       onChange={handleChange}
                    />
      
                    <input type="lastname" 
                        className="form-control" 
                        id="lastname" 
                        placeholder="Enter your last name"
                        value={state.lastname}
                        onChange={handleChange} 
                    />

                    <input type="username" 
                       className="form-control" 
                       id="username" 
                       placeholder="Enter username" 
                       value={state.username}
                       onChange={handleChange}
                    />

                    <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Enter your password" 
                       value={state.password}
                       onChange={handleChange}
                    />

                    <input type="email" 
                       className="form-control" 
                       id="email" 
                       placeholder="Enter a valid email" 
                       value={state.email}
                       onChange={handleChange}
                    />
                    <input type="phonenumber" 
                       className="form-control" 
                       id="phonenumber" 
                       placeholder="Enter your phone number" 
                       value={state.phonenumber}
                       onChange={handleChange}
                    />
                <button type="submit" onClick={handleSubmitClick}>Register</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>

      </div>
    )
}

export default withRouter(Registration);
