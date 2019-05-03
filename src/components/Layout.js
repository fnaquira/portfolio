import React, { Fragment } from 'react';

import Header from './Header';
import About from './About';

const Layout = props => {
	return (
		<Fragment>
			<Header />
			<About />
		</Fragment>
	);
};

export default Layout;
