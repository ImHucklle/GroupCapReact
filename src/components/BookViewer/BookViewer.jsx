import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './BookViewer.scss';
// import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstant';
import { withRouter } from "react-router-dom";
// import { PinDropSharp } from '@material-ui/icons';
// import React, {useState} from 'react';
// import axios from 'axios';
// import './BookViewer.scss';



const BookViewer = (props) => {
    const [ books, setBooks] = useState([])

    async function addToCart(bookId){
        let token = localStorage.getItem('token')
     
        let newBook={
            productId: "",
            userId: "",
            quantity: 1
        }
        let res = await axios.post('https://localhost:44394/api/shoppingcart', newBook, { headers: {Authorization: 'Bearer ' + token}})
        return res.data
      }
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
         <div className="Bookcase">
            <h1>Browse Books</h1>
            {books.map((book)=> (
                <div className='book'>
                    <h2>{book.title}</h2>
                    <h3>Author: {book.author}</h3>
                    <h3>{book.genre}</h3>
                    <div>
                        <h3>{book.description}</h3>
                        <h3>{book.releaseDate}</h3>
                    </div>    
                    <div className='price'><h3>$ {book.price}</h3></div>
                    <button onClick={()=>addToCart(book.id)}>Add To Cart</button>
                </div>
                    
                ))
            }
          </div>
        </Fragment>
    )
}

export default withRouter(BookViewer); 
// export default BookViewer; 