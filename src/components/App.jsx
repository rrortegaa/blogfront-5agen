import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Navbar from './Navbar'
import Home from '../views/Home'
import Post from '../views/Post'
import PostDetail from '../views/PostDetail'
import Login from '../views/Login'


function App() {
    return(
        <Router>
            <div className='app bg-ligth'>
                <Navbar />

                {/* para cambiar de componente dependiendo de la ruta que esta en nuestro path y lleva hijos Route */}
                <Switch>
                    <Route
                        path="/"
                        component={Home}
                        exact
                    />
                    <Route
                        path="/new-post"
                        component={Post}
                        exact
                    />
                    <Route
                        path="/post/:id"
                        component={PostDetail}
                        exact
                    />
                    <Route
                        path="/login"
                        component={Login}
                        exact
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default App
