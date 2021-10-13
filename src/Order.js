import React from 'react'
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

import 'bootstrap/dist/css/bootstrap.min.css';


function Order() {
    return (
        <div className="order">
                        <h3>Order Details</h3>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td className="Table">$999</td>
                            </tr>
                            <tr>
                                <td>Shipping Cost</td>
                                <td className="Table">$49</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td className="total">Total</td>
                                <td className="total Table total2">$1048</td>
                            </tr>
                        </table>
                    </div>
    )
}

export default Order
