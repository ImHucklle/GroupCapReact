import React from "react";
import './ShoppingCart.scss';

const ShoppingCart = (props) => {
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
                    <td><button onClick={() => props.delete()}>Remove item</button></td>
                  </tr>
                )
            </tbody>
        </div>
      )
    }

export default ShoppingCart;