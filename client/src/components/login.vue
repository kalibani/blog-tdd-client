<template lang="html">
  <div class="container">
    <div class="row">
    	<div class="col-md-6 mt-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title" style="text-align:center;">Login Admin</h3>
			 	  </div>
			  	<div class="panel-body">
			    	<form accept-charset="UTF-8" role="form">
              <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" v-model="user.username" placeholder="username" name="email" type="text">
			    		  </div>
  			    		<div class="form-group">
  			    			<input class="form-control" v-model="user.password" placeholder="Password" name="password" type="password" value="">
  			    		</div>
			    		  <input class="btn btn-lg btn-success btn-block" @click="login(user)" value="Login">
			    	  </fieldset>
			      </form>
			    </div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapActions(['login'])
  }

}
</script>

<style lang="css">
</style>
