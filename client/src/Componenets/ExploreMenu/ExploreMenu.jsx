import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, dicta exercitationem quisquam ipsum debitis fuga, recusandae architecto ad eveniet repellat deserunt fugit nam omnis sint, nostrum praesentium dignissimos corrupti atque.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr/>
    </div>
  );
}

export default ExploreMenu;
      



