<template>
  <div class="">
  <div class="row">
    <div class="col-sm-2 mt-4" style="margin: 60px 70px 0;">
      <div class="container" v-for="article in articles">
        <div class="card card-inverse card-info">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link class="navbar-brand link" :to="{ name: 'Blogdetail', params: {id: article._id} }">
                {{article.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section>
      <div class="container py-3">
        <div class="card">
          <div class="row ">
            <div class="col-md-4 mt-4">
              <img :src="article.image" class="w-100">
            </div>
            <div class="col-md-8 px-3">
              <div class="card-block px-3">
                <br>
                <h4 class="card-title">{{article.title}}</h4>
                <p class="card-text">by {{article.author}}</p>
                <p class="card-text">{{article.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'article',
      'articles'
    ])
  },

  watch: {
    '$route' (to, from) {
      this.getById(this.$route.params.id)
    }
  },

  created () {
    this.getById(this.$route.params.id)
    this.getAll()
  },

  methods: {
    ...mapActions([
      'getById',
      'getAll'
    ])
  }
}
</script>

<style lang="css">
.link {
  color: black;
}
.link:hover {
  color: blue;
}
</style>
