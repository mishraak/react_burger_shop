const windowReducer = (state=[], action) => {
	
	switch(action.type) {
		case 'INCREMENT_WINDOW' : 
			return {
				...state,	
				window : window+1
			}
		default :
			return state; 	
	}
}

export default windowReducer;