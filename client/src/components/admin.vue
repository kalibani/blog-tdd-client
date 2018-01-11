<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-10 mt-4">
        <router-link :to="{ name: 'add' }" class="nav-link">Add Book</router-link>
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
              <td>{{article.image}}</td>
              <td>
                <router-link :to="{ name: 'edit', params: {id: article._id} }" class="nav-link">Update</router-link>
                <router-link to="" role="button" class="nav-link">Delete</router-link>
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
    ...mapActions(['getAll'])
  }
}
</script>

<style lang="css">
</style>
