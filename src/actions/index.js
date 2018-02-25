
export const updateTotal = (menu) => {
	dispatch({
		type : 'UPDATE_TOTAL',
		payload : menu.price
	});
}

export const windowReducer = () => {
	dispatch({
		type : 'INCREMENT_WINDOW',
		payload : 1 
	});
}