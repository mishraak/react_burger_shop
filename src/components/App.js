import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import history from '../history';

import Header from './Header';
import ProteinsBoard from './ProteinsBoard';
import ToppingsBoard from './ToppingsBoard';
import MyCheckout from './MyCheckout';
import Bye from './Bye';

export default class App extends Component {

  render() {
    return (
      <div>
  			<BrowserRouter>
				<div>
          <Header />
          <Switch>					
					   <Route exact={true} path="/" component={ProteinsBoard} history={history} />
             <Route exact={true} path="/toppings" component={ToppingsBoard} history={history} />				
             <Route exact={true} path="/checkout" component={MyCheckout} history={history} />        
             <Route exact={true} path="/bye" component={Bye} history={history} />    
          </Switch>
				</div>
			</BrowserRouter>
      </div>
    );
  }
}
