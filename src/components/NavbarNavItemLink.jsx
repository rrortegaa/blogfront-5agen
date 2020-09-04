import React from 'react'

import { Link } from 'react-router-dom'

function NavbarNavItemLink (props) {
	return (
		<li className="nav-item">
			<Link
				className="nav-link"
				to={props.to}
			>
				{props.text}
            </Link>
		</li>
	)
}

export default NavbarNavItemLink