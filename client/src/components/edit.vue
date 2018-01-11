<template lang="html">
  <div class="container">
    <div class="row">
    	<div class="col-md-6 mt-4">
        <form>
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title..">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Author</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="author..">
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea class="form-control" id="exampleTextarea" placeholder="description.."rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Add Poster</label>
              <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
              <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <button type="submit" class="btn btn-primary">Edit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
