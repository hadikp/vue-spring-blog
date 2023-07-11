<script setup>
import { mapActions } from 'pinia'
import axios from 'redaxios'
import { ref } from 'vue'
import { usePostStore } from '../../stores/post'
import moment from 'moment'
import "moment/locale/hu"

const error = ref('')
const postData = usePostStore()
const topics = ref({ data: { data: [] } });

function date(string) {
    moment.locale("hu");
    return moment(string);
  }

axios.get('api/post')
    .then(resp => {
      postData.post = resp.data;
      console.log((postData.post).toString)
     })
    .catch(err => (error.value = 'Valami hiba történt, próbáld újra!'))

</script>

<template>
  <div class="card-content">
    <div class="error">
      <p v-if="error"> {{error}} </p>
    </div>
    
    <article v-for="post in postData.post" :key="post.id">
      <div class="article-date">
        <h3> Published on: {{ date(post.createdAt).format('YYYY-MM-DD HH:mm') }} </h3>
      
      <div class="article-head">
        <h3>{{ post.title }}</h3>
      </div>
      <div class="article-body">
        <!-- <img width="50" height="30" src="" alt="" /> -->
        <p> {{ post.content }} </p>
        <font-awesome-icon class="router-font-awesome" icon="edit" />
      </div>
    </div>
    </article>
</div>
  
</template>

<style scoped>

.article-head, .article-body {
  background-color: #fff;
  width: 70vw;
  padding: 0.5rem;
}

.article-head {
  color: blue;
}

.article-date {
  background-color: rgba(211,234,248,255);
  border-radius: 0.5rem;
  box-shadow: 5px 10px #000;
  margin-top: 2rem;
  width: 75vw;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
}
.card-content {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.1rem;
  text-align: justify;
}

.error {
    color: orange;
  }
</style>