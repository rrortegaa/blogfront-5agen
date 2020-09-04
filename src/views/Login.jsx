import React, { useState, useEffect } from 'react'

import api from '../lib/api'

import LoginForm from '../components/LoginForm'

function Login (props) {
    const [state, setState] = useState({
        loading: true,
        hasError: false,
        errorMessage: ''
    })

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        
        if (token) props.history.push('/new-post')
    }, [props])

    async function onLogin({ email, password }) {
        try {
            const payload = await api.login(email, password)

            sessionStorage.setItem('token', payload.token)
            props.history.push('/new-post')
        } catch (error) {
            setState({
                hasError: true,
                errorMessage: error.message
            })
        }

        setState({
            loading: false
        })
    }

    // async componentDidMount() {
    //     this.state = ({
    //         loading: true
    //     })

    //     try {

    //         const jwt = window.localStorage.getItem('token');
    //         // const jwt = await api.login()

    //         const post = await api.getPostById(this.props.match.params.id)

    //         this.setState({
    //             loading: false,
	// 			post
	// 		})
    //     } catch (error) {
    //         this.setState({
	// 			loading: false,
	// 			hasError: true,
	// 			errorMessage: error.message
	// 		})
    //     }
    // }

    return (
        <div className="login">
            <div className="container">
                <h1 className="title">
                    Iniciar Sesión
                </h1>

                <LoginForm
                    onSubmitParent={ onLogin }
                />
            </div>
        </div>
    )

    // return (
    //     <section className="container pt-5">
    //         <div className="form-group is-centered col-6">
    //             <div className="is-flex mb-3">
    //                 <label
    //                     className="pr-5"
    //                     htmlFor="usr">Email: </label>
    //                 <input
    //                     type="text"
    //                     className="form-control"
    //                     id="usr"
    //                 />
    //             </div>
    //             <div className="is-flex mb-3">
    //                 <label
    //                     className="pr-3"
    //                     htmlFor="pass">Password: </label>
    //                 <input
    //                     type="password"
    //                     className="form-control"
    //                     id="pass"
    //                 />
    //             </div>
    //             <button
    //                 type="button"
    //                 className="btn btn-primary mt-2"
    //                 onSubmit={ Login }
    //             >
    //                 Login
    //                 </button>
    //         </div>
    //     </section>
    // )
}

export default Login