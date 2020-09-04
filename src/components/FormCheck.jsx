import React, { Component } from 'react'

class FormCheck extends Component {
constructor(props) {
    super(props)
    
    this.state = {
		value: ''
	}
}

onCheck(event) {
	const { checked } = event.target
	this.setState({ checked })
}

    render () {
        return (
            <div class="form-group form-check">
            <input
                id={this.props.id}
                type='checkbox'
                class="form-check-input"
                checked={this.state.checked}
                onChange={this.onCheck.bind(this)}
            />

            <label
                class="form-check-label"
                for={this.props.for}
            >
                Check me out
            </label>
            </div>
        )
    }
    
}
 export default FormCheck