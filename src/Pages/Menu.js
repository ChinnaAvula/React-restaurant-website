import React from 'react'
import MenuList from '../Helpers/MenuList'
import MenuItem from '../Components/MenuItem'
import '../Styles/Menu.css'

function Menu() {
  return (
    <div>
        <h1 className="menu">Our Menu</h1>
        <div className="menuList">{MenuList.map((menuItem,key)=>{
            return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} />;
        })}</div>
    </div>
  )
}

export default Menu