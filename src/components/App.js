import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import history from '../history';

import Header from './Header';
import ProteinsBoard from './ProteinsBoard';


export default class App extends Component {
  render() {
    return (
      <div>
  			<BrowserRouter>
				<div>
					<Header />
					<Route exact={true} path="/" component={ProteinsBoard} history={history} />					
				</div>
			</BrowserRouter>
      </div>
    );
  }
}
