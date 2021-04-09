import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const [posts, setPosts] = useState([])

  const history = useHistory()

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then(({ data }) => {
      setPosts(data.posts)
    })
  }, [])

  return (
    <div className='container'>
      {
        posts.map(post => (
          <div
            key={post.id}
            className='post'
            onClick={() => history.push(`/${post.id}`)}
          >
            <div className='title'> {post.title} </div>
            <div className='body'>{post.postText}</div>
            <div className='footer'>{post.username}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Home
