import React, {useState} from 'react';
import './App.css';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import {BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
    const [updateTitle] = useState(null);
    const [updateErrorMessage] = useState(null);

        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                    <Route path="/register">
                        <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                    <Route path="/login">
                        <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                </Switch>  
            </Router>
            
        )
    
}

export default App;