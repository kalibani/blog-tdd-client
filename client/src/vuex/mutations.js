export const saveArticles = (state, payload) => {
  state.articles = payload
}

export const saveArticlesById = (state, payload) => {
  state.article = payload
}

export const saveBooks = (state, payload) => {
  state.articles.push(payload)
}
