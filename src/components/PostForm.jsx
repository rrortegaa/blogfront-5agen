import React, { useState } from 'react'
import FormInput from './FormInput'
import Button from '../components/Button'

function PostForm(props) {
    const [state, setState] = useState({
        title: '',
            description: '',
            image: ''
    })

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         title: '',
    //         description: '',
    //         image: ''
    //     }
    // }

    function onChangeParent(event) {
        const { name, value } = event.target
        setState({ [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault() // Evita que por default intente mandar los parámetros en un get al BackEnd

        if (this.props.onSubmitParent) this.props.onSubmitParent(this.state)
    }
        return (
            <form onSubmit={onSubmit}>
                <FormInput
                    id='title'
                    label='title'
                    name='title'
                    placeholder='el post de la muerte 5000'
                    onChangeParent={onChangeParent}
                />
        
                <FormInput
                    id='description'
                    label='description'
                    name='description'
                    placeholder='blah blah blah'
                    onChangeParent={onChangeParent}
                />
        
                <FormInput
                id='image'
                label='image'
                name='image'
                placeholder='https://algo.algo.com'
                onChangeParent={onChangeParent}
                />

                <Button
                    type='primary'
                    nativeType='submit'
                    text='Crear post'
                />

                {
                    state.image && (
                        <img
                            src={state.image}
                            alt='preview'
                        />
                    )
                }
            </form>
        )
}

export default PostForm