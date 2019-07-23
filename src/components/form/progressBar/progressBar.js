import React from "react";

const ProgressBar = ({ progress }) => (
	<div className="container">
		<ul className="progress-bar">
			<li className={progress == 1 ? "active" : "not-active"} />
			<li className={progress == 2 ? "active" : "not-active"} />
			<li className={progress == 3 ? "active" : "not-active"} />
		</ul>
	</div>
);

export default ProgressBar;
