import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMenu, removeMenu } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';


//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>		
// <h4 onClick={ this.updateCheck.bind(this) }> {this.props.details.menu }  {this.props.details.price} </h4>
const inlineStyle = {
  		checkbox: {
    		marginBottom: 16,
    		width : "100px"
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

	    if(this.state.checked === false) {
	    	this.props.dispatch(addMenu(this.props.details));
	    }
	    else {
	    	this.props.dispatch(removeMenu(this.props.details));
	    }
  	}

	render(){		
		return(			
				<div>
					<MuiThemeProvider>
						<Checkbox
				          label={`${this.props.details.menu} - ${this.props.details.price}` }
				          checked={this.state.checked}
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