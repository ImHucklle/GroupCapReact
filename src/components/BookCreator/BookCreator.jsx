import React, {useState} from 'react';
import axios from 'axios';
import './BookCreator.scss';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstant';
import { withRouter } from "react-router-dom";

function BookCreator() {
    async function handleSubmitClick(){
        console.log("hi")
        let _title = document.getElementById("title").value
        let _author = document.getElementById("author").value
        let _genre = document.getElementById("genre").value
        let _releaseDate = document.getElementById("releaseDate").value
        let _price = document.getElementById("price").value
    
    
        let payload =  { 
            Title: _title,
            Author: _author,
            Genre: _genre,
            ReleaseDate: _releaseDate,
            Price: _price,
         };
         
        let res = await axios.post('https://localhost:44394/api/books/create', payload);
        console.log(res)
        return res.data
        
        
    }
   
    return(
        <div className="bookCreator">
            <form>
                <input type="text" id="title"  placeholder="Enter the book title" />
                <input type="text" id="author"  placeholder ="Enter the author's name" />
                <input type="text" id="genre"  placeholder ="Enter the book genre" />
                <input type="int" id="releaseDate"  placeholder ="Enter the release date)" />
                <input type="int" id="price"  placeholder ="Enter the book price" />
                <button type="submit" onClick={handleSubmitClick}>Add Book</button>

            </form>
        </div>
    )
}

export default withRouter(BookCreator);
