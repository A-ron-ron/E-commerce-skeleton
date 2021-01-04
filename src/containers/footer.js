import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../component';

export function FooterContainer() {
    return (
        <Footer.Container>
          <Footer.Col>
           <Footer.Link to="/faq">FAQ</Footer.Link>
            <Footer.Link to="/privacy">Privacy Policy</Footer.Link>
            <Footer.Link to="/shippingPolicy">Shipping and Returns</Footer.Link>
          </Footer.Col>
          <Footer.Col>
            <Footer.Link to="/contact">Contact</Footer.Link>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </Footer.Col>
          </Footer.Container>
);
}