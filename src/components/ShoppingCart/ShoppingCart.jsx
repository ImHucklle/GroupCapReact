import React from "react";
import axios from 'axios';
import './ShoppingCart.scss';

function ShoppingCart() {


  async function deleteItemFromCart(){
    let res = await axios.delete('https://localhost:44394/api/shoppingcart')
    return res.data
  }

  async function addToCart(book){
    let res = await axios.post('https://localhost:44394/api/shoppingcart')
    return res.data
  }

    return(
        <div>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
              return (
                  <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td><button onClick={() => deleteItemFromCart()}>Remove item</button></td>
                  </tr>
                )
            </tbody>
        </div>
      )
    }

export default ShoppingCart;