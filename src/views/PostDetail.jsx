import React,  { useState, useEffect } from 'react'

import api from '../lib/api'

function PostDetail (props) {
    const [state, setState] = useState({
        post: {}
    })
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         post: {}
    //     }
    // }

    useEffect(() => {
        async function getPostById() {
            try {
                const post = await api.getPostById(this.props.match.params.id)
    
                this.setState({
                    loading: false,
                    post
                })
            } catch (error) {
                this.setState({
                    loading: false,
                    hasError: true,
                    errorMessage: error.message
                })
            }
        }
        getPostById()
    }, [state])

    // async componentDidMount() {
    //     this.state = ({
    //         loading: true
    //     })

    //     try {
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

    render() {
        if (tate.hasError) {
			return (
				<div className="home is-flex is-centered">
					<img
						className="error-img"
                        src="https://pics.me.me/houston-we-have-a-problem-31508469.png"
						alt="An error ocurred when trying to get a post to the server"
					/>
					<div className="alert-danger">
						{ state.errorMessage }
					</div>
				</div>
			)
        }
        
        const {
            title,
            authorName,
            creationDate,
            readTime,
            description,
            image
        } = state.post

        const dateTime = new Date(creationDate)
        return (
            <section className="container">
                <div className="is-flex is-centered" style={ { flexDirection: 'column'} }>
                    <h1>{ title }</h1>
                    <h2>{ authorName }</h2>
                    <h3>{ dateTime.toLocaleString() } - { readTime }</h3>
                    <p className="content">{ description }</p>
                    <img src={ image } alt={ title }/>
                </div>
            </section>
        )
    }
}

export default PostDetail