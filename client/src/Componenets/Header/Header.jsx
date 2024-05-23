import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Order your favourite food here</h2>
            <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredient and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <button className='view-menu' onClick={() => window.location.href = "/#explore-menu"}> View Menu</button>
        </div>
      
    </div>
  )
}

export default Header
