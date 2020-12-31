import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../component';
import { Context } from '../Context';

export function HeaderContainer() {
    
  const {setSidebarState} = useContext(Context)
    
    const openSide = () => { 
        setSidebarState('translateX(0rem)')
    }
    
    return (

    <Header.Container>
    <Header.Brand>
    <Header.Button onClick={openSide}>&#9776;</Header.Button>
    <Link to="/" className="title">Soap Shop</Link>
    </Header.Brand>
    <Header.Links>
    <Header.Link href="cart.html">Cart</Header.Link>
    </Header.Links>
    </Header.Container>

);
}