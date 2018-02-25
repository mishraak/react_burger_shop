import React, { Component } from 'react';

//<ul>  { constants.proteins.map ( item =>  <h4 key={item.menu} > {item.menu }  {item.price} </h4>) }  </ul>		

class MenuItem extends Component {

	render(){		
		return(
			<div><h4 onClick={() => console.log(this.props.details.menu)}> {this.props.details.menu }  {this.props.details.price} </h4></div>			
		);
	};
}

export default MenuItem;