<script setup>
import { mapActions } from 'pinia'
import axios from 'redaxios'
import { ref } from 'vue'
import { usePostStore } from '../../stores/post'

const error = ref('')
const postData = usePostStore()

axios.get('api/post')
    .then(resp => {
      postData.post = resp.data;
     })
    .catch(err => (error.value = 'Valami hiba történt, próbáld újra!'))

</script>

<template>
  <h1>Blog page</h1>
  <div>
    <ul v-for="post in postData.post" :key="post.id">
      {{error}}
    

      <li>{{ post.title }} </li>
      <li> {{ post.content }} </li>
      <li> {{ post.createdAt }} </li>
        
         
    </ul>

  </div>
  
</template>

<style scoped>
</style>