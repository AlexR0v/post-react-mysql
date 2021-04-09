import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Yup from 'yup'

const Post = () => {

  const { id } = useParams()

  const [post, setPost] = useState({})
  const [updatePost, setUpdatePost] = useState(false)

  const history = useHistory()

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then(({ data }) => {
      setPost(data.post)
    })
  }, [updatePost])


  const deletePost = () => {
    axios.delete(`http://localhost:5000/posts/${id}`).then(({ data }) => {
      if (data.success) {
        Swal.fire('Готово!', 'Пост удален').then(res => {
          if (res.isConfirmed) history.push('/')
        })
      }
    })
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Введите заголовок!'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  })

  const onSubmit = (data) => {
    axios.put(`http://localhost:5000/posts/${id}`, data).then(({ data }) => {
      if (data.success) {
        Swal.fire('Отлично!', 'Пост обновлен!')
        setUpdatePost(false)
      }
    })
  }

  const initialValues = {
    title: post?.title,
    postText: post?.postText,
    username: post?.username,
  }

  return (
    <div className='container'>
      <div
        className='post'
      >
        <div className='title'> {post?.title} </div>
        <div className='body'>{post?.postText}</div>
        <div className='footer'>{post?.username}</div>
        <button
          className='button_del'
          onClick={deletePost}
        >Удалить пост
        </button>
        <button
          className='button'
          onClick={() => setUpdatePost(prev => !prev)}
        >{updatePost ? 'Отменить изменения' : 'Изменить пост'}
        </button>
      </div>
      {
        updatePost &&
        <div className='createPostPage'>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className='formContainer'>
              <label>Заголовок: </label>
              <ErrorMessage
                name='title'
                component='span'
              />
              <Field
                autoComplete='off'
                id='inputCreatePost'
                name='title'
                placeholder='Заголовок...'
              />
              <label>Post: </label>
              <ErrorMessage
                name='postText'
                component='span'
              />
              <Field
                autoComplete='off'
                id='inputCreatePost'
                name='postText'
                placeholder='Текст...'
              />
              <label>Username: </label>
              <ErrorMessage
                name='username'
                component='span'
              />
              <Field
                autoComplete='off'
                id='inputCreatePost'
                name='username'
                placeholder='Автор...'
              />

              <button type='submit'>Изменить пост</button>
            </Form>
          </Formik>
        </div>
      }
    </div>
  )
}

export default Post
