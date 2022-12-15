<script setup>
  import { useUserStore } from '../../stores/user'
  import { ref } from 'vue'
  import axios from 'redaxios'
  import router from '../plugins/router'

  const userData = useUserStore()
  const title = ref('')
  const description = ref('')
  const content = ref('')

  const sendPost = () => {
    axios.post('api/post/create', {
      title: title.value,
      description: description.value,
      content: content.value
    }).then(resp => {
      console.log(resp.data),
      router.push({path:'/blog'})})
    .catch(err => (error.value = 'Valami hiba történt, próbáld újra!'))
  }

  
</script>

<template>
  <main>
     <h1>Üdvözöllek {{ userData.user.userName }} </h1>
    <form class="post-form" v-on:submit.prevent="sendPost">  <!-- sendPost -->
        <input class="post-title" type="text" placeholder="Bejegyzés címe" v-model="title">
        <input class="post-description" type="text" placeholder="A bejegyzés rövid tartalma" v-model="description">
        <textarea class="post-content" rows="13" placeholder="Bejegyzés tartalma" v-model="content"></textarea>
      <div class="buttons">
        <button class="buttons-cancel">mégse</button>
        <button class="buttons-save">mentés</button>
      </div>
    </form>
</main>
</template>

<style scoped>

.buttons {
  
    margin: 1rem;
  }

  .buttons-cancel, .buttons-save {
    background-color: #ff2b75;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-family:'Gill Sans', 'Gill Sans MT';
    padding: 0.4rem 0.8rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5rem;
    margin: 0.1rem 0.1rem;
  }

  .buttons-save {
    margin-left: 2rem;
    background-color: orange;
  }

  

  h1 {
    font-size: 2rem;
    margin-top: 1rem;
    text-align: center;
  }

  .post-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .post-title, .post-content, .post-description {
    color: #000;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0.5rem;
    padding: 0.1rem;
    width: 90%;
  }


</style>