import React from 'react'
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

import 'bootstrap/dist/css/bootstrap.min.css';


function Address({name}) {
    return (
        <div>
                        <table>
                            <tr>
                                <td>
                                    <h3>Delivery Address</h3>
                                    <h6><i className="fas fa-map-marker-alt"></i> {name}</h6>
                                    <p className="Delivery">House no 15 <br/> Near GreenLand <br/> North Lakhimpur <br/> Assam <br/> India <br/> +911234567890</p>
                                </td>
                                <td><button type="button" className="btn btn-secondary">Details</button></td>
                            </tr>
                        </table>
                        <hr/>
                    </div>
    )
}

export default Address
