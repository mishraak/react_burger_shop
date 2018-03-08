
const initialState = {
	choices : []
}

const choicesReducer = (state=initialState, action) => {	
	switch(action.type){		
		case 'ADD_MENU' : 		
			return {
				...state,
				choices : state.choices.concat(action.payload)		
			}	
		case 'REMOVE_MENU' : 		
			return {
				...state,
				choices : state.choices.filter(e => e !== action.payload)
			}	
		case 'CLEAR_STATE' : 		
			return {
				...state,
				choices : []		
			}		
		default :
			return {
				...state		
			}
	}
}


export default choicesReducer;

