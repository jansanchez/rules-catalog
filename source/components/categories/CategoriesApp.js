import React from 'react';
import Categories from './Categories';
// import rules from '../../../public/json/rules_catalog.json';

export default class CategoriesApp extends React.Component {
	render() {
		return	<div className="App row"><Categories categories={this.props.categories} /></div>;
	}
}

// React.render(<CategoriesApp />, document.getElementById('container'))
