import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from '../../common/Header';
import Home from '../Home';
import Footer from '../../common/Footer';

export const Pages = () => {
  return (
    <>
    <Router>
        <Header/>
        <Switch>
            <Route exact path='/'>
            <Home/> 
            </Route>
        </Switch>
        
        <Footer/>
    </Router>
    </>
  )
}
