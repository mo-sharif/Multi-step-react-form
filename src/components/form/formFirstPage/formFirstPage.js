import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "../renderField/renderField";

const FormFirstPage = props => {
	const { handleSubmit, questions, handleRadioClick, isChecked } = props;
	return (
		<form onSubmit={handleSubmit}>
			{questions.map((question, index) => (
				<Field
                    onClick={handleRadioClick}
                    checked={isChecked}
                    key={index}
					name={question.name}
					type="radio"
					component={renderField}
                    label={question.label}
				/>
			))}
			<div>
				<button type="submit" className="next-button hover-shadow-effect">
					Next &#8594;
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: "form", // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormFirstPage);
