import React from 'react'
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
        <div className="container image col-lg-6" id="div1">
                <div id="div1-1">
                    <table>
                        <tr>
                            <td><img src={img} alt="IPhone 12 Image" className="img-thumbnail"/></td>
                            <td className="Table">
                                <h6>Apple iphone 12</h6>
                                <p>$999 <br/> Red</p>
                                <pre className="tab">Quantity      1</pre>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="Button container" id="div1-2">
                    <table>
                        <tr>
                            <td className="btn1"><button type="button" className="btn btn-success btn-lg">Accept</button></td>
                            <td className="btn2"><button type="button" className="btn btn-danger btn-lg ">Reject</button></td>
                        </tr>
                    </table>
                </div>
            </div> 
            
    )
}

export default Sidebar
