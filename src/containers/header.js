import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../component';
import { Context } from '../Context';

export function HeaderContainer() {
    
  const {setSidebarState, userData} = useContext(Context)
  const [adminClick, setAdminClick] = useState(false)
    
    const openSide = () => { 
        setSidebarState('translateX(0rem)')
    }

    const handleClick = (e) => {
      e.preventDefault();
      setAdminClick(prevData => !prevData)
    }
    
    return (

    <Header.Container>
    <Header.Brand>
      <Header.Button onClick={openSide}>&#9776;</Header.Button>
      { userData? 
        
        userData.isAdmin?
        <Header.Link onClick={(e) => handleClick(e)}>Welcome, {userData.name}</Header.Link>
        :
        <Header.Link to="/profile/">Welcome, {userData.name}</Header.Link>
        
        : 

        <Header.Link to='/signIn/'>SignIn</Header.Link>
      }

      {adminClick?
      <>
      <Header.Link to="/StockManage/">Product Manage</Header.Link>
      <Header.Link to="/orders/">Orders</Header.Link>
      <Header.Link to="/profile">Profile</Header.Link>
      </>
        :
      <>
      </>
      }

      <Header.LinkTitle to="/" className="title">Soap Shop</Header.LinkTitle>
    </Header.Brand>
    {userData?
      <Header.Links>
        <Header.Link to="/cart" >Cart</Header.Link>
        <Header.Link to="/favelist" >Faves</Header.Link>
      </Header.Links>
    :
      <></>}
    </Header.Container>

);
}