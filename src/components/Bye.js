import React, { Component } from 'react';
import { connect } from "react-redux";


import StripeCheckout from 'react-stripe-checkout';


class Bye extends Component {


	onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

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
				<div>
					<h1> Total </h1>
					<h1> { this.calculateTotal() } </h1>
				</div>

				<div>
					
				<StripeCheckout
        			token={this.onToken}
        		stripeKey="pk_test_fYz3ImcMfuKcqdLFdQrLudRJ"
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


export default connect(mapStateToProps)(Bye);