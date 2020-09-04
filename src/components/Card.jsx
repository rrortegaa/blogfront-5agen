import React from 'react'

function Card(props) {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img
				className="card-img-top"
				src={ props.img }
				alt="..."
			/>
			<div className="card-body">
				{ props.children }
			</div>
		</div>
	)
}

export default Card