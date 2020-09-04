import React, { useState, useEffect } from 'react'

import PostForm from '../components/PostForm'
import api from '../lib/api'

function Post (props) {
  const [state, setState] = useState ({
    loading: false,
    hasError: false,
    user: {},
    errorMessage: ''
  })

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     loading: false,
  //     hasError: false,
  //     user: {},
  //     errorMessage: ''
  //   }
  // }

  useEffect(() => {
    async function getSession() {
      const token = sessionStorage.getItem('token')

      if(token) {
        const user = await api.validateSession(token)

        if(user.name !== state.name) {
          setState({
            loading: false,
            user
          })
        }
      } else {
        props.history.push('/login')
      }
    }
    getSession()
  }, [state, props])

  // async componentDidMount() {
  //   const token = sessionStorage.getItem('token')

  //   if(token) {
  //     setState({ loading: true })

  //     const user = await api.validateSession(token)

  //     setState({
  //       loading: false,
  //       user
  //     })
  //   } else {
  //     props.history.push('/login')
  //   }
  // }

  async function onAddPost(newPost) {
    setState({
      ...state,
      loading: true
    })

    try {
      await api.addPost({
        ...newPost,
        authorName: this.state.user.name
      })

      props.history.push('/')
    } catch (error) {

        if(error.message !== state.message) {

        }




      setState({
        hasError: true,
        errorMessage: error.message
      })
    }
    setState({
      loading: false
    })


    

  }

  const containerClassNames = ['container']
  const growClassNames = ['spinner-grow', 'text-info', 'all-page']

  if (state.loading) containerClassNames.push('hidden')
  else growClassNames.push('hidden')

  if (state.hasError) {
    return (
      <div className="home is-flex is-centered">
        <img
          className="error-img"
          src="https://pics.me.me/houston-we-have-a-problem-31508469.png"
          alt="An error ocurred when trying to create a post to server"
        />
        <div className="alert-danger">
          { state.errorMessage }
        </div>
      </div>
    )
  }

  return (
    <div className="post">
      <div className="container">
        <h1 className="title">
          Crear Nuevo Post
        </h1>
        <PostForm
				  onSubmitParent={ onAddPost }
			  />
      </div>
    </div>
  )
}

export default Post