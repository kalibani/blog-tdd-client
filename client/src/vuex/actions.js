import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const getAll = ({ commit }, payload) => {
  http.get('/articles', payload)
  .then(({data}) => {
    commit('saveArticles', data)
  }).catch((err) => {
    console.log(err)
  })
}

export const getById = ({ commit }, id) => {
  http.get('/articles/' + id)
  .then(({data}) => {
    commit('saveArticlesById', data)
  })
  .catch((err) => {
    console.log(err)
  })
}

export const login = ({ commit }, payload) => {
  http.post('/users/auth/login', payload)
  .then(({data}) => {
    console.log(data)
    swal({
      title: 'OK',
      text: data.message,
      icon: 'success',
      button: 'OK'
    }).then(() => {
      localStorage.setItem('token', data.token)
      router.push('/admin')
    })
  })
  .catch((err) => {
    console.log(err)
  })
}

export const addBook = ({ commit }, payload) => {
  let book = new FormData()
  book.append('title', payload.title)
  book.append('author', payload.author)
  book.append('content', payload.content)
  book.append('image', payload.image)
  http.post('/articles', payload)
  .then(({data}) => {
    console.log(data)
    swal({
      title: 'OK',
      text: data.message,
      icon: 'success',
      button: 'OK'
    }).then(() => {
      commit('saveBooks', data)
      router.push('/admin')
    })
  })
  .catch((err) => {
    console.log(err)
  })
}
