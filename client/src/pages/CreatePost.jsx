import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import axios from 'axios'

function CreatePost () {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  }

  const history = useHistory()

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Введите заголовок!'),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  })

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/posts', data).then(({ data }) => {
      if (data.success) {
        Swal.fire('Отлично!', 'Пост добавлен!').then(res => {
          if (res.isConfirmed) history.push('/')
        })
      }
    })
  }
  return (
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

          <button type='submit'>Создать пост</button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
