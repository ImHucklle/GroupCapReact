/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './BookViewer.scss';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstant';
import { withRouter } from "react-router-dom";
// import { PinDropSharp } from '@material-ui/icons';



const BookViewer = () => {
    const [ books, setBooks] = useState({})

    const getbooks = async () => {

        try {
            let res = await axios.get('https://localhost:44394/api/books');
            setBooks(res.data)
            console.log("All books response: ",res.data)
            // console.log(books)
        } catch (err) {
            console.log("An API error occured with books: ", err)
            console.log(books)
        }
    }

    useEffect(() => {
        getbooks()
    },[])

    return(
        <Fragment>
            <h1>Browse Books</h1>
            {books.map((book)=> (
                <><h2>{book.title}</h2><h3>{book.author}</h3><h3>{book.genre}</h3><h3>{book.dscription}</h3><h3>{book.releaseDate}</h3><h3>{book.price}</h3><button>Add To Cart</button></>
            ))}
        </Fragment>
    )
}

export default withRouter(BookViewer);