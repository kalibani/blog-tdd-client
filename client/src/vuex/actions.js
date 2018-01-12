import axios from 'axios'
import router from '../router'
import swal from 'sweetalert'

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://goodreads-api.kautzaralibani.com/api',
  headers: {
    Authorization: token
  }
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
  console.log('payload addbook', payload)
  let book = new FormData()
  book.append('title', payload.title)
  book.append('author', payload.author)
  book.append('content', payload.content)
  book.append('image', payload.image)
  http.post('/articles', book)
  .then(({data}) => {
    console.log(data)
    commit('saveBooks', data)
    swal({
      title: 'OK',
      text: data.message,
      icon: 'success',
      button: 'OK'
    }).then(() => {
      router.push('/admin')
    })
  })
  .catch((err) => {
    console.log(err)
  })
}

export const editBook = ({ commit }, payload) => {
  console.log('payload editbook', payload)
  let book = new FormData()
  book.append('title', payload.title)
  book.append('author', payload.author)
  book.append('content', payload.content)
  book.append('image', payload.image)
  http.put('/articles/' + payload.id, book)
  .then(({data}) => {
    console.log(data)
    commit('saveEditedBooks', data)
    swal({
      title: 'OK',
      text: data.message,
      icon: 'success',
      button: 'OK'
    }).then(() => {
      router.push('/admin')
    })
  })
  .catch((err) => {
    console.log(err)
  })
}

export const deletedBook = ({ commit }, id) => {
  console.log('payload deletedBook', id)
  http.delete('/articles/' + id)
  .then(({data}) => {
    console.log(data)
    commit('saveDeletedBooks', data)
    swal({
      title: 'OK',
      text: 'book succesfully deleted',
      icon: 'success',
      button: 'OK'
    }).then(() => {
      router.push('/admin')
    })
  })
  .catch((err) => {
    console.log(err)
  })
}
