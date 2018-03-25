import React, { Component } from "react";
import constants from "../constants";




import { Button } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { clearState } from "../actions";

//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>
//<MenuItem key={item.menu} details="{menu : 'Hu' , price : '8.75'}" />

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

class ProteinsBoard extends Component {






	constructor(props) {
		super(props);
		//this.onPrevClick = this.haonPrevClickndler.bind(this);
	}

	onChange(event) {
		console.log(event);
		console.log("checked!");
	}

	onNextClick() {
		if (this.props.choices.choices.length < 3)
			alert("Please select one option from each category");
		else this.props.history.push("/toppings");
	}

	onPrevClick() {
		console.log("onPrevClick clicked");
		this.props.dispatch(clearState());
		window.location.reload();
	}

	render() {
		return (
			<div className="container">
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>
								{constants.proteins.map(item => (
									<MenuItem
										key={item.menu}
										details={item}
										uniqueId={"proteins-" + `${item.menu}`}
									/>
								))}
							</div>
						</div>
					</Paper>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>
								{constants.proteins_weights.map(item => (
									<MenuItem
										key={item.menu}
										details={item}
										uniqueId={
											"proteins_weights-" + `${item.menu}`
										}
									/>
								))}
							</div>
						</div>
					</Paper>
				</MuiThemeProvider>
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>
								{constants.carbs.map(item => (
									<MenuItem
										key={item.menu}
										details={item}
										style={inlineStyle.menuitem}
										uniqueId={"carbs-" + `${item.menu}`}
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
						value="Next"
					/>
				</div>
			</div>
		);
	}
}

ProteinsBoard.propTypes = {
	clearState: PropTypes.func
};

function mapStateToProps(state) {
	return {
		choices: state.choices
	};
}

export default connect(mapStateToProps)(ProteinsBoard);

/*

<Link
							to="/cheese"
							className="btn-floating btn-large green"
						>
							<i className="material-icons">add</i>
						</Link>	



						<Paper style={inlineStyle.paper}>
								<Checkbox
						          label="Simple with controlled value"						          
						          onCheck={this.updateCheck.bind(this)}
						          style={inlineStyle.checkbox}
						        />
						    </Paper>
*/
