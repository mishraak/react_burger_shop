import React, { Component } from 'react';
import { connect } from "react-redux";

class Bye extends Component {

	constructor(props) {
		super(props);	
		this.calculateTotal = this.calculateTotal.bind(this)	
	}

	calculateTotal(){	
		var sum=0;			
		for(var i=0; i<this.props.choices.choices.length; i++){			
			sum+=parseInt(this.props.choices.choices[i].price);
		}	
		return sum;				
	}

	render(){

		return(

			<div>
				<h1> Total </h1>
				<h1> { this.calculateTotal() } </h1>

			</div>
		);
	}
}


function mapStateToProps (state) {
	return {			
		choices : state.choices		
	}
}


export default connect(mapStateToProps)(Bye);