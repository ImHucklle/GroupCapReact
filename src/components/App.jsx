import React, {useState} from 'react';
import './App.css';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './Home/Home'
function App() {
    const [title, updateTitle] = useState(null);
    const [updateErrorMessage] = useState(null);

        return (
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Header/>
                        <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                    <Route path="/register">
                        <Header/>
                        <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                    <Route path="/login">
                        <Header/>
                        <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                    <Route path="/home">
                        <Header/>
                        <HomePage showError={updateErrorMessage} updateTitle={updateTitle}/>
                    </Route>
                </Switch>  
            </Router>
            
        )
    
}

export default App;