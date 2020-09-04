import React, { Component } from 'react'

class NavbarNavItemDropdown extends Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false
		}
	}

	toggleActive() {
		this.setState({ active: !this.state.active })
	}
	
	render() {
		const classNames = ['dropdown-menu']
		if(this.state.active) classNames.push('show')
		
		return(
			<li className = "Nav-item dropdown" >
				<a
					className="nav-link dropdown-toggle"
					href="/"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					onClick={this.toggleActive.bind(this)}
				>
					{this.props.text}
				</a>
	
				<div
					className={classNames.join(' ')}
					aria-labelledby="navbarDropdown"
				>
					{this.props.children}
				</div>
			</li>
		)
	}

}

export default NavbarNavItemDropdown

// Antes de usar states en mi componente
// import React from 'react'

// function NavbarNavItemDropdown(props) {
// 	const classNames = ['dropdown-menu']

// 	if (props.show) classNames.push('show')

// 	return (
// 		<li className="Nav-item dropdown">
// 			<a
// 				className="nav-link dropdown-toggle"
// 				href="/"
// 				id="navbarDropdown"
// 				role="button"
// 				data-toggle="dropdown"
// 				aria-haspopup="true"
// 				aria-expanded="false"
// 			>
// 				{props.text}
// 			</a>

// 			<div
// 				className={classNames.join(' ')}
// 				aria-labelledBy="navbarDropdown"
// 			>
// 				{props.children}
// 			</div>
// 		</li>
// 	)
// }

// export default NavbarNavItemDropdown