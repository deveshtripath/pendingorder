// import './App.css';
import './main.css'
import img from "./img/71E5zB1qbIL 1.png"
import img1 from "./img/favicon.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

function App() {
  return (
  <div>
    <div>
        <h1 className="orderid">ORDER ID 656JH20210713</h1>
    </div>
    <div className="container">
        <div className="row">
         <Sidebar/>
            <RightSidebar/>
        </div>
    </div>
    </div>
  );
}

export default App;
