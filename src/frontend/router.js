import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/products/Product';
import Cart from './pages/shop/cart';
import Signin from './pages/account/Signin';
import Register from './pages/account/Register';
import StockManage from './pages/admin/StockManage';
import Shipping from './pages/purchase/shipping';
import Payment from './pages/purchase/payment';
import PlaceOrder from './pages/purchase/placeOrder';
import Order from './pages/purchase/order';
import Profile from './pages/profile/profile';
import Orders from './pages/profile/orders';
import About from './pages/info/about';
import FAQ from './pages/info/faq';
import Contact from './pages/info/contact';
import privacy from './pages/info/privacy';
import ShippingPol from './pages/info/shippingPol';
import FaveList from './pages/profile/faveList';
import { SidebarContainer } from './containers/sidebar';
import { HeaderContainer } from './containers/header';
import { FooterContainer } from './containers/footer';
import { MainSty } from './component';

function Router() {

  return (
    <BrowserRouter>
      <MainSty.Container>
        <HeaderContainer />
        <SidebarContainer />
        <MainSty.Pages>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:category" component={Home} />
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
            
          </Switch>
        </MainSty.Pages>
        <FooterContainer />
      </MainSty.Container>
    </BrowserRouter>
  );
}

export default Router;
