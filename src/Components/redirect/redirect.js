import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Redirect extends Component {

	submitForm (e) {
		e.preventDefault()
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm.bind(this)}>
					<button type="submit">Submit</button>
				</form>
			</div>
		)

	}
}

export default withRouter(Redirect);
