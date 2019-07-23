import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(
	initialState = {
		questionsReducer: {
			firstPage: [
				{ name: "q1", label: "Question 1" },
				{ name: "q2", label: "Question 2" },
				{ name: "q3", label: "Question 3" }
			],
			secondPage: [
				{ name: "q4", label: "I was stressed with my nerves on edge" },
				{
					name: "q5",
					label: "I lost hope and wanted to give up when something went wrong"
				},
				{
					name: "q6",
					label: "I feel very satisfied with the way I look and act"
				}
			],
			thirdPage: [
				{ name: "q7", label: "Question 7" },
				{ name: "q8", label: "Question 8" },
				{ name: "q9", label: "Question 9" }
			]
		}
	}
) {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
