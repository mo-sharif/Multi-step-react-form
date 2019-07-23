import React from "react";
const options = ["Never", "Occasionally", "Ofter", "Very Often", "Always"];

const renderField = ({ name, label, type, meta: { touched, error } }) => (
	<div>
		<h2 className="question">{label}</h2>
		<div className="radio-toolbar">
			{options.map((element, index) => (
				<div key={index}>
					<input type={type} id={element + label} name={label} />
					<label htmlFor={element + label}>
						<div className="label-font">{element}</div>
					</label>
				</div>
			))}
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export default renderField;
