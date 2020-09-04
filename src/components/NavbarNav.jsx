import React from 'react'

import NavbarNavItemLink from './NavbarNavItemLink'

function NavbarNav() {
	return (
		<ul className="navbar-nav mr-auto">
			<NavbarNavItemLink
				text="Home"
				to="/"
			/>
			<NavbarNavItemLink
				text="New Post"
				to="/new-post"
			/>
			<NavbarNavItemLink
				text="Login"
				to="/login"
			/>
		</ul>
	)
}

export default NavbarNav