import React from 'react';
import {default as Router, Route, NotFoundRoute} from 'react-router';
import CategoriesApp from './components/categories/CategoriesApp';

const routes = <Route>
	<Route path="/" handler={CategoriesApp} />
	</Route>;

Router.run(routes, Router.HashLocation, Root => {
	React.render(<Root />, document.getElementById('container'));
});
