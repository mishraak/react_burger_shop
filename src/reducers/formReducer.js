
const initialState = {
	choices : []
}

const formReducer = (state=initialState, action) => {		
	switch(action.type){		
		case 'CHECKOUT' : 		
			return {
				...state
			}	
		default :
			return {
				...state		
			}
	}
}

export default formReducer;

