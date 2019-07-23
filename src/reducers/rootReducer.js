import { combineReducers } from "redux";
import welcomeReducer from "./welcomeReducer";
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
	welcomeReducer,
	form: formReducer
});
