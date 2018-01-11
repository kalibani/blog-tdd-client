<template lang="html">
  <div class="container">
    <div class="row">
    	<div class="col-md-6 mt-4">
        <form>
          <fieldset>
            <div class="form-group">
              <label >Title</label>
              <input type="text" class="form-control" v-model="article.title">
            </div>
            <div class="form-group">
              <label >Author</label>
              <input type="text" class="form-control" v-model="article.author">
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" v-model="article.content" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Edit Poster</label>
              <input type="file" class="form-control-file" id="InputFile" @change="onFileChange">
            </div>
            <button type="button" class="btn btn-primary" @click="editBooks(article._id)">Edit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      book: {
        title: '',
        content: '',
        author: '',
        image: ''
      }
    }
  },

  computed: {
    ...mapState([
      'article'
    ])
  },

  watch: {
    '$route' (to, from) {
      this.getById(this.$route.params.id)
    }
  },

  created () {
    this.getById(this.$route.params.id)
  },

  methods: {
    ...mapActions([
      'getById',
      'editBook'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.article.image = files[0]
    },
    editBooks (id) {
      let obj = {
        id: id,
        title: this.article.title,
        author: this.article.author,
        content: this.article.content,
        image: this.article.image
      }
      this.editBook(obj)
    }
  }
}
</script>

<style lang="css">
</style>
