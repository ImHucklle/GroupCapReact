import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        )
    }
}

export default App;