import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { connect } from "react-redux";

class Header extends Component {
	
	componentWillReceiveProps(nextProps) {
		  this.setState({
		    total: this.props.choices.choices.reduce( (a, b) =>  {x : 10 },0 ) 
		  });
	}

	state ={
		total : 0
	}

	render() {
		return (
			<div>
			<MuiThemeProvider>
				<nav>
					<div className="nav-wrapper">
						<Link to={"/"} className="left brand-logo" > 
							<AppBar title={this.state.total} iconClassNameRight="muidocs-icon-navigation-expand-more" />
						</Link>					
					</div>
				</nav>
			</MuiThemeProvider>	
			</div>	
		);
	}	
}

function mapStateToProps (state) {
	return {			
		choices : state.choices		
	}
}


export default connect(mapStateToProps) (Header);
//export default Header;

