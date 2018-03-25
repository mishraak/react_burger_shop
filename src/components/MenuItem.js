import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMenu, removeMenu } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import constants from '../constants';

//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>		
// <h4 onClick={ this.updateCheck.bind(this) }> {this.props.details.menu }  {this.props.details.price} </h4>


//label={`${this.props.details.menu} - ${this.props.details.price}` }

//proteins.map(function(x) {return x.menu; }).indexOf('Chicken Breast');

const inlineStyle = {
  		checkbox: {
    		marginBottom: 16    		
  		},
  		block: {
    		maxWidth: 250,
  		}  		
 }

class MenuItem extends Component {  	
	state = {
		checked : false
	}

  	updateCheck() {  		


	    if(this.state.checked === false) {	    	
	    	//if(this.props.choices.choices.map(function(x){ return x }).indexOf(this.props.details)) console.log("contains already!")	    	
	    	//console.log(this.props.choices.choices.some(function (v) { return constants.proteins.indexOf(v) >= 0 }));
	    	
			if(this.props.uniqueId.substr(0, this.props.uniqueId.indexOf('-'))==="proteins") {				
				if(this.props.choices.choices.some(function (v) { return constants.proteins.indexOf(v) >= 0 })){
					alert("Already contains a protein choice, please check items from other options");									
				}
				else {
					this.props.dispatch(addMenu(this.props.details));					
					this.setState((oldState) => {
	      						return {
	        						checked: !oldState.checked,
	      						};
	    			});
				}

			}
	    	else if(this.props.uniqueId.substr(0, this.props.uniqueId.indexOf('-'))==="proteins_weights") {
	    		if(this.props.choices.choices.some(function (v) { return constants.proteins_weights.indexOf(v) >= 0 })){
					alert("Already contains a protein weight choice, please check items from other options");											
				}
				else {
					this.props.dispatch(addMenu(this.props.details));					
					this.setState((oldState) => {
	      						return {
	        						checked: !oldState.checked,
	      						};
	    			});
				}
	    	}
	    	else if(this.props.uniqueId.substr(0, this.props.uniqueId.indexOf('-'))==="carbs") {
	    		if(this.props.choices.choices.some(function (v) { return constants.carbs.indexOf(v) >= 0 })){
					alert("Already contains a carbs choice, please check items from other options");											
				}
				else {
					this.props.dispatch(addMenu(this.props.details));					
					this.setState((oldState) => {
	      						return {
	        						checked: !oldState.checked,
	      						};
	    			});
				}
	    	}
	    	else if(this.props.uniqueId.substr(0, this.props.uniqueId.indexOf('-'))==="toppings") {
	    		if(this.props.choices.choices.some(function (v) { return constants.toppings.indexOf(v) >= 0 })){
					alert("Already contains a carbs choice, please check items from other options");											
				}
				else {
					this.props.dispatch(addMenu(this.props.details));					
					this.setState((oldState) => {
	      						return {
	        						checked: !oldState.checked,
	      						};
	    			});
				}
	    	}
	    }
	    else {
	    	this.props.dispatch(removeMenu(this.props.details));
	    	this.setState((oldState) => {
	      						return {
	        						checked: !oldState.checked,
	      						};
	    	});
	    }
  	}

	render(){		
		return(			
				<div style={inlineStyle.block}>
					<MuiThemeProvider>
						<Checkbox				          
				          checked={this.state.checked}
				          label={`${this.props.details.menu} - ${this.props.details.price}` }
				          onCheck={this.updateCheck.bind(this)}
				          style={inlineStyle.checkbox}
			        	/>
			        </MuiThemeProvider>	
				</div>						
		);
	};
}

function mapStateToProps (state) {
	return {			
		choices : state.choices		
	}
}

export default connect(mapStateToProps) (MenuItem);

