import React, { Component } from 'react';
import constants from '../constants';
import { Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import MenuItem from './MenuItem';

//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>	
//<MenuItem key={item.menu} details="{menu : 'Hu' , price : '8.75'}" />												

const inlineStyle = {
	prevBtn  : {
		float : "left"
	},
	nextBtn  : {
		float : "right"
	},
	paper : {
		display: 'inline-block',		
  		margin: '20px 20px 20px 20px',
  		height : '300px',
  		width : '300px'  		
	},
	menuitem : {
		width : "100px"
	},
	label : {
		width : "100%"
	}	
}

class ProteinsBoard extends Component{
	
	onChange(event) {
		console.log(event);
	    console.log("checked!");
  	}

  	onNextClick(){
  		this.props.history.push("/man");
  		console.log("next clicked");
  	}
  	
  	onPrevClick(){
  		alert("Please select a proteins option!");
  	}

	render(){
		return (
			<div className="container">
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>						
								{
									constants.proteins.map( item => 								
										<MenuItem key={item.menu} details={item} />								
									)
								}
							</div>					
						</div>
					</Paper>
				</MuiThemeProvider>	
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>						
								{
									constants.proteins_weights.map( item => 								
										<MenuItem key={item.menu} details={item} />								
									)
								}
							</div>					
						</div>
					</Paper>
				</MuiThemeProvider>	
				<MuiThemeProvider>
					<Paper style={inlineStyle.paper}>
						<div className="row">
							<div className="col-md-4" style={inlineStyle.label}>						
								{
									constants.carbs.map( item => 								
										<MenuItem key={item.menu} details={item} style={inlineStyle.menuitem} />								
									)
								}
							</div>					
						</div>
					</Paper>
				</MuiThemeProvider>		
				<div className="row">					
					<input type="button" style={inlineStyle.prevBtn} onClick={this.onPrevClick.bind(this)} className="btn btn-primary" value="Previous"/> 
					<input type="button" style={inlineStyle.nextBtn} onClick={this.onNextClick.bind(this)} className="btn btn-primary" value="Next"/> 
				</div>
			</div>

		);
	}
}

export default ProteinsBoard;

/*


						<Paper style={inlineStyle.paper}>
								<Checkbox
						          label="Simple with controlled value"						          
						          onCheck={this.updateCheck.bind(this)}
						          style={inlineStyle.checkbox}
						        />
						    </Paper>
*/