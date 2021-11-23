import './Registration.css'
import React, {useState} from 'react';
function Registration(props) {
    const [state , setState] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        phonenumber: ""
        
    })
    const handleChange = (e) => {
        const {id , value} = e.target  
        console.log(e) 
        setState(prevState => ({
            prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }

    return(
      <div>
      
      <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
      
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />

        <input type="username" 
                       className="form-control" 
                       id="username" 
                       placeholder="Enter username" 
                       value={state.username}
                       onChange={handleChange}
                />

        <input type="firstname" 
                       className="form-control" 
                       id="firstname" 
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
        <input type="phonenumber" 
                       className="form-control" 
                       id="phonenumber" 
                       placeholder="Enter your phone number" 
                       value={state.phonenumber}
                       onChange={handleChange}
                />
            <button onClick={handleSubmitClick}>Submit</button>


      </div>
    )
}
export default Registration