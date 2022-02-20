import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Route ,Switch} from "react-router";
import { BrowserRouter } from "react-router-dom";
import Product from "./Product";
import PageNotFound from "./PageNotFound";
import NavLinkDemo from "./NavLinkDemo";
import PostData from "./PostData";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";

export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/contact" exact component={ContactUs}/>
      <Route path="/aboutus" exact component={AboutUs}/>
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="*" component={NotFound}></Route>
    </Switch>
    
    </BrowserRouter>



      //1
      // <BrowserRouter>
      //     <NavBar />
      //     <Route path="/" exact component={Login} />
      //     <Route path="/dashboard" exact component={Dashboard} />
      //     <Route path="/customers" exact component={CustomersList} />
      //     <Route path="/cart" exact component={ShoppingCart} />
      //     <Route path="/product" exact component={Product} />
      //     <Route path="*"  component={PageNotFound}></Route>
      //   </BrowserRouter>
      //<BrowserRouter>
      //   <NavLinkDemo />
      //   <Switch>
      //   <Route path="/" exact component={Login} />
      //   <Route path="/dashboard" exact component={Dashboard} />
      //   <Route path="/customers" exact component={CustomersList} />
      //   <Route path="/cart" exact component={ShoppingCart} />
      //   <Route path="/product" exact component={Product} />
      //   <Route path="*" component={PageNotFound}></Route>
      //   </Switch>
      // </BrowserRouter>
      // <div>
      //   <PostData></PostData>
      // </div>
    );
  }
}
