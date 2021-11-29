import React, {useState} from 'react';
import axios from 'axios';
import './Registration.scss';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstant';
import { withRouter } from "react-router-dom";

// async function handleSubmitClick(){
//     console.log("hi")
//     let _firstName = document.getElementById("firstname").value
//     let _lastName = document.getElementById("lastname").value
//     let _username = document.getElementById("username").value
//     let _password = document.getElementById("password").value
//     let _email = document.getElementById("email").value
//     let _phoneNumber = document.getElementById("phonenumber").value


//     let payload =  { 
//         // FirstName: _firstName,
//         // LastName: _lastName,
//         // UserName: _username,
//         // Password: _password,
//         // Email: _email,
//         // PhoneNumber: _phoneNumber
//         FirstName: "name7",
//         LastName: "lastname7",
//         UserName: "username7",
//         Password: "password7",
//         Email: "email6@email.com",
//         PhoneNumber: "555-555-5557"
//      };
     
//     let res = await axios.post('https://localhost:44394/api/authentication/register', payload);
//     console.log(res)
//     let apple= 1
//     return res.data
    
    
// }
    function Registration() {
        async function handleSubmitClick(){
            console.log("hi")
            let _firstName = document.getElementById("firstname").value
            let _lastName = document.getElementById("lastname").value
            let _username = document.getElementById("username").value
            let _password = document.getElementById("password").value
            let _email = document.getElementById("email").value
            let _phoneNumber = document.getElementById("phonenumber").value
        
        
            let payload =  { 
                FirstName: _firstName,
                LastName: _lastName,
                UserName: _username,
                Password: _password,
                Email: _email,
                PhoneNumber: _phoneNumber
                // FirstName: "name8",
                // LastName: "lastname8",
                // UserName: "username8",
                // Password: "password8",
                // Email: "email6@email.com8",
                // PhoneNumber: "555-555-5558"
             };
             
            let res = await axios.post('https://localhost:44394/api/authentication/register', payload);
            console.log(res)
            return res.data
            
            
        }
    // const [state , setState] = useState({
    //     firstname: "",
    //     lastname: "",
    //     username: "",
    //     password: "",
    //     email: "",
    //     phonenumber: "",
        
    // })
    
    // const handleChange = (e) => {
    //     const {id , value} = e.target  
    //     console.log(e) 
    //     setState(prevState => ({
    //         prevState,
    //         [id] : value
    //     }))
    // }

   

    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/home');
    // }

    // const redirectToLogin = () => {
    //     props.updateTitle('Login')
    //     props.history.push('/login');
    // }
   
    // const handleSubmitClick = async (e) => {
    //     console.log("hi")
    //     let payload =  { 
    //         FirstName: e.firstname,
    //         LastName: e.lastname,
    //         UserName: e.username,
    //         Password: e.password,
    //         Email: e.email,
    //         PhoneNumber: e.phonenumber
    //      };
    //      console.log("bye")
    //     let res = await axios.post('https://localhost:44394/api/authentication/register', payload);
    //     return res
        
        
    // }

       
     
        return(
            <div className="registration">
                <form>
                    <input type="text" id="firstname"  placeholder="Enter your first name" />
                    <input type="text" id="lastname"  placeholder ="Enter your last name" />
                    <input type="text" id="username"  placeholder ="Enter your username" />
                    <input type="text" id="password"  placeholder ="Enter your password (must be 8 characters and must contain numbe)" />
                    <input type="text" id="email"  placeholder ="Enter your email" />
                    <input type="text" id="phonenumber" placeholder="Enter your phonenumber" />
                    <button type="submit" onClick={handleSubmitClick}>Register</button>

                </form>
            </div>
        )
        

    //   <div className="registration">
    //         {/* <form>
    //                 <input type="firstname" 
    //                    className="form-control" 
    //                    id="firstname" 
    //                    aria-describedby="emailHelp" 
    //                    placeholder="Enter your first name" 
    //                    value={state.firstname}
    //                    onChange={handleChange}
    //                 />
      
    //                 <input type="lastname" 
    //                     className="form-control" 
    //                     id="lastname" 
    //                     placeholder="Enter your last name"
    //                     value={state.lastname}
    //                     onChange={handleChange} 
    //                 />

    //                 <input type="username" 
    //                    className="form-control" 
    //                    id="username" 
    //                    placeholder="Enter username" 
    //                    value={state.username}
    //                    onChange={handleChange}
    //                 />

    //                 <input type="password" 
    //                    className="form-control" 
    //                    id="password" 
    //                    placeholder="Enter your password" 
    //                    value={state.password}
    //                    onChange={handleChange}
    //                 />

    //                 <input type="email" 
    //                    className="form-control" 
    //                    id="email" 
    //                    placeholder="Enter a valid email" 
    //                    value={state.email}
    //                    onChange={handleChange}
    //                 />
    //                 <input type="phonenumber" 
    //                    className="form-control" 
    //                    id="phonenumber" 
    //                    placeholder="Enter your phone number" 
    //                    value={state.phonenumber}
    //                    onChange={handleChange}
    //                 />
    //             <button type="submit" onClick={handleSubmitClick}>Register</button>
    //         </form>
    //         <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
    //             {state.successMessage}
    //         </div>
    //         <div className="mt-2">
    //             <span>Already have an account? </span>
    //             <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
    //         </div> */}

    //   </div>
    
    }
    

export default withRouter(Registration);
