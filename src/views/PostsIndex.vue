<template>
  <div class='posts-index'>
    <h1>All Blog Posts</h1>

    <div v-for='post in posts'>
      <router-link :to="'/posts/' + post.id">
        <h3> {{post.title}} </h3>
      </router-link>
      <img :src="post.image" :alt="post.title">
      <p> {{post.body}} </p>
    </div> <!-- end v for loop -->

  </div>
</template>

<style>
  
</style>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        posts: []
      };
    },
    created: function() {
      axios.get('/api/posts').then(response => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
    methods: {}
  };
</script>