<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <router-link class="navbar-brand" :to="{ name: 'Blog', params: {} }">
        Goodreads
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls=".navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Blog' }" class="nav-link">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: '' }" class="nav-link">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'login' }" class="nav-link">Admin?</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
