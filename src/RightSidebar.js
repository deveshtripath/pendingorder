import React from 'react'
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './Order';
import Address from './Address';


function RightSidebar() {
    return (
        <div className="container col-lg-6" id="div2">
                <div className="container">
                    <div>
                        <h3>Order Type</h3>
                        <table>
                            <tr>
                                <td><img src={img1} alt="Truck Image" className="img-thumbnail"/></td>
                                <td className="Home">
                                    <p>Home Delivery</p>
                                </td>
                            </tr>
                        </table>
                        <hr/>
                    </div>
                    <Address
                        name="Mriganka Baruah"
                    />
                    <div>
                        <h3>Payment Method</h3>
                        <table>
                            <tr>
                                <td><i className="fab fa-cc-visa"></i></td>
                                <td className="Payment">**** **** **** 4321</td>
                            </tr>
                        </table>
                    </div>
                    <hr/>
                    <Order/>
                </div>
            </div>
    )
}

export default RightSidebar
