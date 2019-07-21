export default (state = {}, action) => {
	switch (action.type) {
		case "WELCOME_ACTION":
			return {
				result: action.payload
			};
		default:
			return state;
	}
};
