import React, { useContext } from 'react';
// import { Header } from '../component';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

export function HeaderContainer() {
    
  const {setSidebarState} = useContext(Context)
    
    const openSide = () => { 
        setSidebarState('translateX(0rem)')
    }
    
    return (

    <header className="header">
<div className="brand">
  <button onClick={openSide}>&#9776;</button>
  <Link to="/" className="title">Soap Shop</Link>
</div>
<div className="header-links">
  <a href="cart.html">Cart</a>
</div>
</header>

);
}