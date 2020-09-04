import React from 'react'

import Card from '../components/Card'
import Button from '../components/Button'

function PostList(props) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    props.data.map((post) => (
                        <div className="col-4 mb-3" key={post._id}> 
                            <Card img={post.image}>
                                <h5 className="card-title">
                                    {post.title}
                                </h5>
                                <p className="card-text">
                                    {post.description}
                                </p>
                                <Button
                                    type="primary"
                                    text={`ir a ${post.title}`}
                                    to={`/post/${post._id}`}
                                />
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PostList 