import React, { Component } from 'react';
import constants from '../constants';
import { Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import actions from '../actions';
import MenuItem from "./MenuItem";

const inlineStyle = {
	prevBtn: {
		float: "left"
	},
	nextBtn: {
		float: "right"
	},
	paper: {
		display: "inline-block",
		margin: "20px 20px 20px 20px",
		height: "300px",
		width: "300px"
	},
	menuitem: {
		width: "100px"
	},
	label: {
		width: "100%"
	}
};

class ToppingsBoard extends Component{
	constructor(props) {
		super(props);
		//this.onPrevClick = this.haonPrevClickndler.bind(this);
	}

	onChange(event) {
		console.log(event);
		console.log("checked!");
	}

	onNextClick() {		
		this.props.history.push("/checkout");
	}

	onPrevClick() {
		console.log("onPrevClick clicked");
		//this.props.dispatch(clearState());
		//window.location.reload();
		this.props.history.push("/");
	}


	render(){	
		return (
			<div className="container">
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>
								{constants.toppings.map(item => (
									<MenuItem
										key={item.menu}
										details={item}
										uniqueId={"toppings-" + `${item.menu}`}
									/>
								))}
							</div>
						</div>
					</Paper>
				</MuiThemeProvider>				
			<div className="row">
				<input
						type="button"
						style={inlineStyle.prevBtn}
						onClick={this.onPrevClick.bind(this)}
						className="btn btn-primary"
						value="Previous"
					/>
				<input
						type="button"
						style={inlineStyle.nextBtn}
						onClick={this.onNextClick.bind(this)}
						className="btn btn-primary"
						value="Finish"
					/>
				</div>
			</div>
		);
	}
}


function mapStateToProps (state) {
	return {			
		choices : state.choices		
	}
}


export default ToppingsBoard;