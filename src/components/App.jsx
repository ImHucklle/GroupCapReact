import React, {Component} from 'react';
import './App.css';
// import Registration from './Registration/Registration';
import Header from './Header/Header.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // const getLogin = async (userName, password) => (){
    //     let response = await axios.get()

    // }



    render(){
        return (
            <div className="App">
                <Header/ >
                {/* <Registration/ > */}
            </div>
        )
    }
}

export default App;