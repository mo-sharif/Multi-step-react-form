import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField/renderField";

const FormThirdPage = props => {
	const { handleSubmit, previousPage, submitting, questions } = props;
	return (
		<form onSubmit={handleSubmit}>
			{questions.map((question, index) => (
				<Field
					key={index}
					name={question.name}
					type="radio"
					component={renderField}
					label={question.label}
				/>
			))}
			<div>
				<button
					type="button"
					className="previous-button hover-shadow-effect"
					onClick={previousPage}
				>
					&#8592; Previous
				</button>
				<button
					type="submit"
					className="next-button hover-shadow-effect"
					disabled={submitting}
				>
					Submit
				</button>
			</div>
		</form>
	);
};
export default reduxForm({
	form: "form", //Form name is same
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormThirdPage);
