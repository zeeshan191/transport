import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.mim.css";
import Home from './Home';
import Trucktype from './Trucktype';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import {Switch, Route, Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


const App =() => {
  return (
  <> 
  <Navbar/>
  <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/trucktype" component={Trucktype}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to ="/home"/>
  </Switch>
  <Footer />
</>
);
}; 
  export default App;