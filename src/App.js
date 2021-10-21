import './App.css';
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

// // https://pendingorder-cf3e3.web.app/

import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './Sidebar';
// import RightSidebar from './RightSidebar';

// function App() {
//   return (
//   <div>
//     <div>
//         <h1 classNameName="orderid">ORDER ID 656JH20210713</h1>
//     </div>
//     <div classNameName="container">
//         <div classNameName="row">
//          <Sidebar/>
//             <RightSidebar/>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default App;


import React from 'react'

function App() {
  return (
    <div>
      <div>
        <h1 className="orderid">ORDER ID 656JH20210713</h1>
    </div>
    
    <div className="container">
    
        <div className="row">
            <div className="container image col-lg-6" id="div1">
                <div id="div1-1">
                    <table>
                        <tr>
                            <td><img src={img} alt="IPhone 12 Image" className="img-thumbnail"/></td>
                            <td className="Table">
                                <h6>Apple iphone 12</h6>
                                <p>$999 <br/><span className="mt-2" > Red</span></p>
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
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <h3>Delivery Address</h3>
                                    <h6><i className="fas fa-map-marker-alt"></i> Mriganka Baruah</h6>
                                    <p className="Delivery">House no 15 <br/> Near GreenLand <br/> North Lakhimpur <br/> Assam <br/> India <br/> +911234567890</p>
                                </td>
                                <td><button type="button" className="btn btn-secondary">Details</button></td>
                            </tr>
                        </table>
                        <hr/>
                    </div>
                    <div>
                        <h3>Payment Method</h3>
                        <table>
                            <tr>
                                <td><i className="fab fa-cc-visa"></i></td>
                                <td className="Payment">**** **** **** 4321</td>
                            </tr>
                        </table>
                    </div>
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
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default App
