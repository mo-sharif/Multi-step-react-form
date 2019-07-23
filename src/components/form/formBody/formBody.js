import React from "react";
import FormFirstPage from "../formFirstPage/formFirstPage";
import FormSecondPage from "../formSecondPage/formSecondPage";
import FormThirdPage from "../formThirdPage/formThirdPage";

import PropTypes from "prop-types";

class FormBody extends React.Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = {
			page: 1
		};
	}
	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
  }
  radioClick() {
          this.setState((prevState) => {
              return {isChecked: !prevState.isChecked};
          });
  }
	render() {
		const { onSubmit } = this.props;
		const { page } = this.state;
		return (
			<div>
				<h1 className={"title"}>Negativity Bias and Stress</h1>
				<p className={"paragraph"}>
					Here are a few questions about how you feel, cope, and interact with
					others. There are no right or wrong answers. Please focus on the past
					week or so.
				</p>
				<div>
					{page === 1 && (
						<FormFirstPage
							questions={this.props.questions.firstPage}
              onSubmit={this.nextPage}
              onClick={this.radioClick}
              isChecked={this.state.isChecked}
						/>
					)}
					{page === 2 && (
						<FormSecondPage
							questions={this.props.questions.secondPage}
							previousPage={this.previousPage}
							onSubmit={this.nextPage}
						/>
					)}
					{page === 3 && (
						<FormThirdPage
							questions={this.props.questions.thirdPage}
							previousPage={this.previousPage}
							onSubmit={onSubmit}
						/>
					)}
				</div>
			</div>
		);
	}
}

FormBody.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default FormBody;
