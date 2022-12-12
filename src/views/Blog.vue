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
  <div class="content">
    <div class="error">
      <p v-if="error"> {{error}} </p>
    </div>
    <article v-for="post in postData.post" :key="post.id">
      <div class="article-head">
        <h3>{{ post.title }}</h3>
      </div>
      <div class="article-body">
        <!-- <img width="50" height="30" src="" alt="" /> -->
        <p> {{ post.content }} </p>
      </div>
      <div class="article-date">
        <h3> Published on: {{ date(post.createdAt).format('YYYY-MM-DD HH:mm') }} </h3>
      </div>
      <hr>
      <p>----------------------------------------------------</p>
    </article>
</div>
  
</template>

<style scoped>

.article-date {
  margin-top: 0.2rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: justify;
}

.error {
    color: orange;
  }
</style>