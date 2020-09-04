import React, { useState } from 'react'

function FormInput(props) {
	const [state, setState] = useState('')

function onChangeInput(event) {
	const { value } = event.target

	setState(value)

	if (this.props.onChangeParent) this.props.onChangeParent(event)
}
	return (
		<div className="form-group">
			<label
				htmlFor={props.id}
			>
				{props.label}
			</label>
			<input
				onChange={onChangeInput}
				id={props.id}
				name={props.name}
				type={props.type}
				className="form-control"
				aria-describedby={props.description}
				placeholder={props.placeholder}
			/>
			{
				props.help && (
					<small
						id={`${props.id}-help`}
						className="form-text text-muted">
					>
						{props.help}
					</small>
				)
			}
		</div>
	)
}

export default FormInput