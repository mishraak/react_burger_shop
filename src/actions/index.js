

export const addMenu = function (menu) {
	console.log("addMenu called");
	return {
		type : 'ADD_MENU',
		payload : menu
	};
}
	
export const removeMenu = function (menu) {
	console.log("removeMenu called");
	return {
		type : 'REMOVE_MENU',
		payload : menu
	};
}

export const clearState = function () {
	console.log("clearState called");
	return {
		type : 'CLEAR_STATE'		
	};
}


export const windowReducer = function () {
	return {
		type : 'INCREMENT_WINDOW',
		payload : 1 
	};
}
