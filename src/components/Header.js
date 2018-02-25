import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Header extends Component {
	render() {
		return (
			<div>
			<MuiThemeProvider>
				<nav>
					<div className="nav-wrapper">
						<Link to={"/"} className="left brand-logo" > 
							<AppBar title="HEADER" iconClassNameRight="muidocs-icon-navigation-expand-more" />
						</Link>					
					</div>
				</nav>
			</MuiThemeProvider>	
			</div>	
		);
	}	
}

export default Header;