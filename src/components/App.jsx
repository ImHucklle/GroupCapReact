// import React, {useState} from 'react';
import './App.css';
import BookCreator from './BookCreator/BookCreator';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './Home/Home'
import BookViewer from './BookViewer/BookViewer';
function App() {
    // const [title, updateTitle] = useState(null);
    // const [updateErrorMessage] = useState(null);

        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact={true} component={HomePage} />
                    <Route path="/register" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/create" component={BookCreator} />
                    <Route path="/books" component={BookViewer} />
                    <Route path="/cart" component={ShoppingCart} />
                </Switch>  
            </Router>
            
        )
    
}

export default App;