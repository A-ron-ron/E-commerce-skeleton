import React from 'react';
// import { Footer } from '../component';
import { Link } from 'react-router-dom';

export function FooterContainer() {
    return (
        <footer className="footer">
          <div className="footer-left">
           <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/shippingPolicy">Shipping and Returns</Link>
          </div>
          <div className="footer-right">
            <Link to="/contact">Contact</Link>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
          </footer>
);
}