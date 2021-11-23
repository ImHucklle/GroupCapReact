import React from 'react'
import './Registration.css'
import { useState } from 'react'

const Registration = () => {

    const [formValues, setFormValues] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phonenumber: ''
    })

    const handleChange = (event) => {
        setFormValues({...formValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.prevent.default()
        console.log(formValues)
    }

    return ( 

    <div>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type= 'text'  onChange={handleChange} ></input>
            <label>Last Name</label>
            <input type= 'text'  onChange={handleChange} ></input>
            <label>User Name</label>
            <input type= 'text'  onChange={handleChange} ></input>
            <label>Email</label>
            <input type= 'text'  onChange={handleChange} ></input>
            <label>Password</label>
            <input type= 'text'  onChange={handleChange} ></input>
            <button type ='submit'>Submit</button>
        </form>
        
    </div> 
    );
}
 
export default Registration;
