export default (state = {}, action) => {
	switch (action.type) {
		case "QUESTIONS_ACTION":
			return {
				result: action.payload
			};
		default:
			return state;
	}
};
