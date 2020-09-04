import React from 'react'

import { Link } from 'react-router-dom'

function Button(props) {
    const classNames = ['btn']

    if (props.type) classNames.push(`btn-${props.type}`)
    return props.to ? (
        <Link
            to={ props.to }
            className={ classNames.join(' ') }
        >
            { props.text }
        </Link>
    ) : (
        <button
            type={ props.nativeType }
            className={ classNames.join(' ') }
        >
            { props.text }
        </button>
    )
}

export default Button