import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../component';

export function FooterContainer() {
    return (
        <Footer.Container>
          <Footer.Col>
           <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/shippingPolicy">Shipping and Returns</Link>
          </Footer.Col>
          <Footer.Col>
            <Link to="/contact">Contact</Link>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </Footer.Col>
          </Footer.Container>
);
}