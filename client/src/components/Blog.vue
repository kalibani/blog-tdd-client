<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-2 mt-4" style="margin: 60px 70px 0;">
        <br>
        <div class="container">
        <div class="card card-inverse card-info">
          <ul class="list-group" v-for="article in articles">
            <li class="list-group-item">
              <router-link class="navbar-brand" :to="{ name: 'Blogdetail', params: {id: article._id} }">
                {{article.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-6 mt-4">
      <div class="row">
        <div class="col-sm-4 mt-4" v-for="article in articles">
          <div class="card card-inverse card-info">
            <img class="card-img-top" :src="article.image">
            <div class="card-block">
              <figure class="profile">
                <img :src="article.image" class="profile-avatar" alt="">
              </figure>
              <h4 class="card-title mt-3"><a>{{article.title}}</a></h4>
              <div class="meta card-text">
                <strong>Author</strong> : <a>{{article.author}}</a>
              </div>
              <div class="card-text">
                <read-more more-str="read more..." :text="article.content" link="#" less-str="read less" :max-chars="50"></read-more>
              </div>
            </div>
            <div class="card-footer">
              <router-link :to="{ name: 'Blogdetail', params: { id: article._id } }">
                <button class="btn btn-info float-right btn-sm">Details</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['articles'])
  },

  created () {
    this.getAll()
  },

  methods: {
    ...mapActions([
      'getAll'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/blog.css";
</style>
