<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-10 mt-4">
        <div class="">
          <router-link :to="{ name: 'add' }" class="nav-link link" style="float:left;">Add Book</router-link>
          <a href="" role="button" @click="logout" class="nav-link link" style="float:right;">Logout</a>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Content</th>
              <th scope="col">Poster</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles">
              <th scope="row">{{article.title}}</th>
              <td>{{article.author}}</td>
              <td><read-more more-str="read more..." :text="article.content" link="#" less-str="read less" :max-chars="100"></read-more></td>
              <td><a class="link" :href="article.image">{{article.image}}</a></td>
              <td>
                <router-link :to="{ name: 'edit', params: {id: article._id} }" class="nav-link link">Update</router-link>
                <a href="" role="button" @click.prevent="deletedBook(article._id)" class="nav-link link">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['articles'])
  },

  created () {
    this.getAll()
  },

  methods: {
    ...mapActions([
      'getAll',
      'deletedBook'
    ]),
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped="" lang="css">
.link {
  color: black;
}
.link:hover {
  color: blue;
}
</style>
