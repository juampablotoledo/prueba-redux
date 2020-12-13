import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';

class Results extends Component {
	render() {
		const { suggestions } = this.props;

		console.log(suggestions);
		return (
			<Page 
				suggestions={suggestions}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		suggestions: state.suggestions,
	};
};

const wrapper = connect(mapStateToProps);
const component = wrapper(Results);

export default component;