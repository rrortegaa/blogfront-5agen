import React, { useState} from 'react'

import FormInput from '../components/FormInput'
import Button from '../components/Button'

function LoginForm (props) {
    // variable de estado: state
    const [state, setState] = useState ({
        email: '',
        password: ''
    })

    function onChange(event) {
        const { name, value } = event.target

        setState = ({
            ...state,
            [name]: value
        })
    }

    function onSubmit(event) {
        event.preventDefault()

        if(props.onSubmitParent) props.onSubmitParent(state)
    }

    return(
        <form
            className="new-post"
            onSubmit={onSubmit}
        >
            <FormInput
                id="email"
                name=""
            />
            <FormInput
                id=""
                name=""
            />
        </form>
    )

}

export default LoginForm
