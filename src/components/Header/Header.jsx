import React, { Component } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from '@material-ui/icons/Apps';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

class Header extends Component{
    state = {
        search: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
        this.props.getVideo(this.state.search);
    }
    
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <MenuIcon />
                    <img className="header__logo" src="https://cdn.pixabay.com/photo/2017/05/27/13/33/logo-2348459_1280.jpg" alt="Books" />
                </div>

                <div className="header__input">
                    <input type="text" />
                    
                    <SearchIcon />
                    {/* <form onSubmit={this.handleSubmit}>
                        <label htmlFor="search">Search</label>
                        <input action='Search' onChange={this.handleChange} name='search' type="text" value={this.state.search}/>
                        <button type='submit'onChange={this.handleChange} name='search' type="text" value={this.state.search}>Search</button>
                    </form>  */}
                </div>

                <div className="header__icons">
                    <LoginSharpIcon className="header__icons" />
                    <LogoutSharpIcon className="header__icons" />
                    <AppRegistrationSharpIcon className="header__icons" />
                    {/* <Button variant="outlined">Log In</Button>
                    <Button variant="outlined">Log Out</Button> */}
                    {/* <AppsIcon className="header__icons" /> */}
                    {/* <NotificationsIcon className="header__icons" /> */}
                    <Avatar 
                        alt="Avatar"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQF46L0HsEN25w/profile-displayphoto-shrink_800_800/0/1516757744200?e=1643241600&v=beta&t=JCI3WR1otJPtS7rek6_PnVly17zlBz7dvoLBGkpZba0" />
                </div>      
            </div>
        )
    }
}

export default Header