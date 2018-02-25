const totalReducer = (state=[], action) => {
	switch(action.type) {
		case 'UPDATE_TOTAL' : 
			return {
				...state,
				total : total + action.payload.price,
				choices : choices.concat(action.payload.menu)				
			}
		default :
			return state; 	
	}
}

export default totalReducer;