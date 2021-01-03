import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../component';
import { Context } from '../Context';

export function HeaderContainer() {
    
  const {setSidebarState, userData} = useContext(Context)
  const {adminClick, setAdminClick} = useState(false)
    
    const openSide = () => { 
        setSidebarState('translateX(0rem)')
    }

    const handleClick = () => {
      setAdminClick(prevData => !prevData)
    }
    
    return (

    <Header.Container>
    <Header.Brand>
    <Header.Button onClick={openSide}>&#9776;</Header.Button>
    { userData? 
      
      userData.isAdmin?
      <h2 onClick={() => handleClick()}>{userData.name}</h2>
      :
      <Link to="/profile/">{userData.name}</Link>
      
      : 

      <Link to='/signIn/'>SignIn</Link>
    }

    {adminClick?
    <>
    <Link to="/StockManage/">Product Manage</Link>
    <Link to="/orders/">Orders</Link>
    <Link to="/profile">Profile</Link>
    </>
      :
    <>
    </>
    }

    <Link to="/" className="title">Soap Shop</Link>
    </Header.Brand>
    <Header.Links>
    <Link to="/cart" >Cart</Link>
    <Link to="/favelist" >Faves</Link>
    </Header.Links>
    </Header.Container>

);
}