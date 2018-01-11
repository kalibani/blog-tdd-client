<template lang="html">
  <div class="container">
    <div class="row">
    	<div class="col-md-6 mt-4">
        <form>
          <fieldset>
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" v-model="book.title" placeholder="title..">
            </div>
            <div class="form-group">
              <label>Author</label>
              <input type="text" class="form-control" v-model="book.author" placeholder="author..">
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" v-model="book.content" placeholder="description.."rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Add Poster</label>
              <input type="file" class="form-control-file" id="InputFile" aria-describedby="fileHelp" @change="onFileChange">
              <small id="fileHelp" class="form-text text-muted"></small>
            </div>
            <button type="button" class="btn btn-primary" @click="addBooks">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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

  methods: {
    ...mapActions(['addBook']),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.book.image = files[0]
    },
    addBooks () {
      let obj = {
        title: this.book.title,
        author: this.book.author,
        content: this.book.content,
        image: this.book.image
      }
      this.addBook(obj)
    }
  }
}
</script>

<style lang="css">
</style>
