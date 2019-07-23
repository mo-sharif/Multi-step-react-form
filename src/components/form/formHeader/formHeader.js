import React from "react";
import { Link } from "react-router-dom";

class FormHeader extends React.Component {
	render() {
		return (
			<div className={"header"}>
				<Link to="/">
        <div className={"logo"}>TotalBrain</div>
				</Link>
				<Link to="/">
					<div className={"close"}>&#10005;</div>
				</Link>
			</div>
		);
	}
}
export default FormHeader;
