import React from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({child, heading}) => {
	return (
		<>
			<Header heading={heading} />
			<main>
				{child}
			</main>
			<Footer />
		</>
	)
}

export default Layout;
