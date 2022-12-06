<script setup>
import axios from 'redaxios'
import { ref } from 'vue'
import { usePostStore } from '../../stores/post'

const error = ref('')
const posts = usePostStore()

axios.get('api/post')
    .then(resp => {
      posts.posts = (resp.data);
    console.log(posts) })
    .catch(err => (error.value = 'Valami hiba történt, próbáld újra!'))


   
</script>

<template>
  <h1>Blog page</h1>
  <div>
    <div></div>
    <ul v-for="post in posts" :key="post.id">
      {{error}}
    

      <li >{{post}}
         </li>
    </ul>

  </div>
  
</template>

<style scoped>
</style>