import React, {Component} from 'react';
import './App.css';
import Registration from './Registration/Registration';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    

        return (
            <Router>
                <Switch>
                    <Route path="/register" component={Registration} />
                </Switch>  
            </Router>
            
        )
    
}

export default App;