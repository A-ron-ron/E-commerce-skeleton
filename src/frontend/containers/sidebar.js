import React, { useContext } from 'react';
import { Sidebar } from '../component';
import { Link } from 'react-router-dom';
import { Context } from '../context';

export function SidebarContainer() {

    const { setSidebarState, userData } = useContext(Context)
    
    const closeSide = () => { 
        setSidebarState('translateX(-30rem)')
    }

    return (
    <Sidebar.Container>
        <Sidebar.Button onClick={closeSide}>X</Sidebar.Button>
           
            <Sidebar.Section>
            <Sidebar.Title>Shop by catagory</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Sidebar.Link to="/" >All products</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/Bar" params={{category: "bar"}}>Bars</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/Face" category="face" >Face</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/Bath" category="bath" >Bath</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/Body" category="body" >Body</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/Hair" category="hair" >Hair</Sidebar.Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            
            <Sidebar.Section>
            <Sidebar.Title>About us.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                    <Sidebar.Link to="/about">About</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/contact">Contact</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/faq">FAQ</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/privacy">Privacy Policy</Sidebar.Link>
                </Sidebar.LI>
                <Sidebar.LI>
                    <Sidebar.Link to="/shippingPolicy">Shipping and Returns</Sidebar.Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>

            {userData?
            <Sidebar.Section>
            <Sidebar.Title>About You.</Sidebar.Title>
            <Sidebar.UL>
                <Sidebar.LI>
                <Sidebar.Link to="/profile">Edit Profile</Sidebar.Link>
                </Sidebar.LI>
            </Sidebar.UL>
            </Sidebar.Section>
            :
            <></>}
    </Sidebar.Container>
    );
}