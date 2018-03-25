import React, { Component } from 'react';
import constants from '../constants';
import { Button } from 'react-bootstrap';
import actions from '../actions';
import { connect } from "react-redux";
import { checkout } from '../actions';


const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.price);

const inlineStyle = {
	nextBtn: {
		float: "right"
	},
}

class MyCheckout extends Component{

	constructor(props) {
		super(props);	
		this.checkout = this.checkout.bind(this)	
	}

	 checkout(){
		
		var sum=0;		
		for(var i=0; i<this.props.choices.choices.length; i++){			
			sum+=parseInt(this.props.choices.choices[i].price);
		}
		
		console.log("checkout clicked!");
		this.props.dispatch(checkout({ menu : 'total', price : sum }));		
		this.props.history.push("/bye");
	}

	render(){
		return(
			<div>

				<div>
					Click on Checkout if you wish to checkout!
					<input
							type="button"
							style={inlineStyle.nextBtn}
							onClick={this.checkout}
							className="btn btn-primary"
							value="Checkout"
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


export default connect(mapStateToProps)(MyCheckout);;