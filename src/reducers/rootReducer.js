import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
	questionsReducer,
	form: formReducer
});
