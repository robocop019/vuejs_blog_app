<template>
  <div class='posts-show'>
    <h2 > {{post.title}} </h2>
    <img :src="post.image" :alt="post.title">
    <p> {{post.body}} </p>
  </div>
</template>

<script>
  var axios = require('axios');

  export default {
    data: function() {
      return {
        post: {
              id: '',
              user_id: '',
              title: '',
              body: '',
              image: ''
        }
      };
    },
    created: function() {
      axios.get('/api/posts/' + this.$route.params.id).then(response => {
        this.post = response.data;
      });
    },
    methods: {}
  };
</script>