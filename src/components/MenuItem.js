import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMenu, removeMenu } from '../actions';


//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>		

const inlineStyle = {
  		checkbox: {
    		marginBottom: 16
  		}
  }

class MenuItem extends Component {
  	
	state = {
		checked : false
	}

  	updateCheck() {  		
	    this.setState((oldState) => {
	      return {
	        checked: !oldState.checked,
	      };
	    });


	    if(this.state.checked === true) {
	    	this.props.dispatch(addMenu(this.props.details));
	    }
	    else {
	    	this.props.dispatch(removeMenu(this.props.details));
	    }
  	}

	render(){		
		return(
			<div><h4 onClick={ this.updateCheck.bind(this) }> {this.props.details.menu }  {this.props.details.price} </h4></div>					

		);
	};
}


function mapStateToProps (state) {
	return {			
		choices : state.choices		
	}
}

export default connect(mapStateToProps) (MenuItem);