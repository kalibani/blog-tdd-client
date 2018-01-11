export const saveArticles = (state, payload) => {
  state.articles = payload
}

export const saveArticlesById = (state, payload) => {
  state.article = payload
}

export const saveBooks = (state, payload) => {
  console.log('payload saveBooks', payload.dataArticle)
  state.articles.push(payload.dataArticle)
}

export const saveEditedBooks = (state, payload) => {
  console.log('payload mutations', payload.updatedArticle._id)
  let index = state.articles.indexOf(payload.updatedArticle._id)
  state.articles.splice(index, 1, payload.updatedArticle)
}

export const saveDeletedBooks = (state, payload) => {
  console.log('payload mutations delete', payload)
  let index = state.articles.indexOf(payload._id)
  state.articles.splice(index, 1)
  console.log(state.articles)
}
