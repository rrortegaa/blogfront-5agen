import React, { useState, useEffect } from 'react'

// import SearchPost from '../components/SearchPost'
import PostList from '../components/PostList'

import api from '../lib/api'

function Home () {
	const [state, setState] = useState({
		loading: false,
		hasError: false,
		errorMessage: '',
		posts: []
	})

	useEffect(() => {
		async function getPosts() {
			try {
				const posts = await api.getPosts()

				if(state.posts.length !== posts.length) {
					setState({
						...state,
						loading: false,
						posts
					})
				}
			} catch (error) {
				if(state.errorMessage !== error.message) {
					setState({
						loading: false,
						hasError: true,
						errorMessage: error.message
					})
				}
			}
		}
		getPosts()
	}, [state])

	// ComponentWillMount has been renamed, and is not recommended for use
	// componentWillMount() {
	// 	console.log('Me voy a montar')
	// }

	// reemplazado por useEffect
	// async componentDidMount() {
	// 	this.setState({ loading: true })

	// 	try {
	// 		const posts = await api.getPosts()
	
	// 		this.setState({
	// 			loading: false,
	// 			posts
	// 		})
	// 	} catch (error) {
	// 		this.setState({
	// 			loading: false,
	// 			hasError: true,
	// 			errorMessage: error.message
	// 		})
	// 	}
	// }

	// componentWillUpdate has been renamed, and is not recommended for use
	// componentWillUpdate() {
	// 	console.log('Me voy a actualizar')
	// }

	// componentDidUpdate() {
	// 	console.log('Ya me actualicé')
	// }

	// componentWillUnmount() {
	// 	console.log('Me estoy quitando')
	// }

		const containerClassNames = ['container']
		const growClassNames = ['spinner-grow', 'text-info', 'all-page']

		if (state.loading) containerClassNames.push('hidden')
		else growClassNames.push('hidden')
		if (state.hasError) {
			return (
				<div className="home is-flex is-centered">
					<img
						className="error-img"
						src="https://pbs.twimg.com/media/DwBXr44X0AY1Xkt.jpg"
						alt="An error ocurred when trying to get posts to server"
					/>
					<div className="alert-danger">
						{ state.errorMessage }
					</div>
				</div>
			)
		}

		return (
			<div className="home">
				<div
					className={ growClassNames.join(' ') }
					role='status'
				>
					<span className='sr-only'>Loading...</span>
				</div>
				<div className={ containerClassNames.join(' ') }>
					<PostList
						data={ state.posts }
					/>
				</div>
			</div>
		)
}

export default Home