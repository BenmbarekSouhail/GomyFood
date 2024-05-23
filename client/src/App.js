
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/pages/Home/Home';
import Cart from './Componenets/pages/Home/Cart/Cart';
import PlaceOrder from './Componenets/pages/PlaceOrder/PlaceOrder';
import Footer from './Componenets/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Componenets/LoginPopup/LoginPopup';
import Verify from './Componenets/pages/Verify/Verify';
import MyOrders from './Componenets/pages/MyOrders/MyOrders';



function App() {
  const [showLogin,setSHowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setSHowLogin={setSHowLogin}/>:<></>}
      <div className="App">
        <Navbar setSHowLogin={setSHowLogin}/>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/Cart' element={<Cart />} />
          < Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>

      </div>
      <Footer />
    </>

  );
}

export default App;
