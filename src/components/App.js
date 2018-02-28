import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import history from '../history';

import Header from './Header';
import ProteinsBoard from './ProteinsBoard';
import CheeseBoard from './CheeseBoard';


export default class App extends Component {
  render() {
    return (
      <div>
  			<BrowserRouter>
				<div>
          <Header />
          <Switch>					
					   <Route exact={true} path="/" component={ProteinsBoard} history={history} />
             <Route exact={true} path="/cheese" component={CheeseBoard} history={history} />				
          </Switch>
				</div>
			</BrowserRouter>
      </div>
    );
  }
}
