import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Register from './pages/Register';
import StockManage from './pages/StockManage';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import About from './pages/About';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import privacy from './pages/privacy';
import ShippingPol from './pages/shippingPol';
import FaveList from './pages/faveList';
import { SidebarContainer } from './containers/sidebar';
import { HeaderContainer } from './containers/header';
import {FooterContainer } from './containers/footer';

function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <HeaderContainer />
        <SidebarContainer />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favelist" component={FaveList} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/shippingPolicy" component={ShippingPol} />
            <Route path="/privacy" component={privacy} />
            <Route path="/contact" component={Contact} />
            <Route path="/orders" component={Orders} />
            <Route path="/profile" component={Profile} />
            <Route path="/order/:id" component={Order} />
            <Route path="/StockManage" component={StockManage} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/payment" component={Payment} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/:category" component={Home} />
          </Switch>
        </main>
        <FooterContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
