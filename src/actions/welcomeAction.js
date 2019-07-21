export const welcomeAction = () => dispatch => {
	dispatch({
		type: "WELCOME_ACTION",
		payload: "Welcome to Total Brain"
	});
};
