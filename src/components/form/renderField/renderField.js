import React from "react";
const options = ["Never", "Occasionally", "Ofter", "Very Often", "Always"];

const renderField = ({ input,checked, label, type, meta: { touched, error } }) => (
	<div>
		<h2 className="question">{label}</h2>
		<div className="radio-toolbar">
			{options.map((option, index) => (
				<div className='radio-input' key={index}>
					<input type={type} id={option + '_' + label} name={label} {...input} value={option} checked={checked}/>
					<label htmlFor={option + '_' + label}>
						<div className="label-font">{option}</div>
					</label>
				</div>
			))}
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export default renderField;
