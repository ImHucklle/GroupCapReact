import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search";
import PersonAddAlt1SharpIcon from '@mui/icons-material/PersonAddAlt1Sharp';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
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
        this.props.getVideo(this.state);
    }
    
    render() {
        return(
            <div className="header">
                <div className="header__left">
                    <MenuIcon />
                    <img className="header__logo" src="https://cdn.pixabay.com/photo/2017/05/27/13/33/logo-2348459_1280.jpg" alt="Books" />
                </div>

                <div className="header__input">
                    <input placeholder="Search" type="text" />
                    <SearchIcon className="header__inputButton" />
                    {/* <form onSubmit={this.handleSubmit}>
                        <label htmlFor="search">Search</label>
                        <input action='Search' onChange={this.handleChange} name='search' type="text" value={this.state.search}/>
                        <button type='submit'onChange={this.handleChange} name='search' type="text" value={this.state.search}>Search</button>
                    </form>  */}
                </div>

                <div className="header__icons">
                    <div className="home">
                        <button type='button' className="button">
                            <span className="button__text">
                                <Link to='/home'>Home</Link>
                            </span>
                            <span className="button__icon">
                                < PersonAddAlt1SharpIcon/>
                            </span>
                        </button>
                    </div>
                    <div className="register">
                        <button type='button' className="button">
                            <span className="button__text">
                                <Link to='/register'>Register</Link>
                            </span>
                            <span className="button__icon">
                                < PersonAddAlt1SharpIcon/>
                            </span>
                        </button>
                    </div>
                    <div className="login">
                        <button type='button' className="button">
                            <span className="button__text">
                                <Link to='/login'>Login</Link>
                            </span>
                            <span className="button__icon">
                                < LoginSharpIcon/>
                            </span>
                        </button>
                    </div>
                    <div className="logout">
                        <button type='button' className="button">
                            <span className="button__text">
                                Log out
                            </span>
                            <span className="button__icon">
                                < LogoutSharpIcon/>
                            </span>
                        </button>
                    </div>
                     
                    {/* COMMENTING OUT THE AVATAR B/C THEN WE'D HAVE TO CREATE A PIC UPLOAD IN THE REGISTRATION FORM */}
 
                    {/* <Avatar 
                        alt="Avatar"
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQF46L0HsEN25w/profile-displayphoto-shrink_800_800/0/1516757744200?e=1643241600&v=beta&t=JCI3WR1otJPtS7rek6_PnVly17zlBz7dvoLBGkpZba0" /> */}
                </div>      
            </div>
        )
    }
}

export default Header