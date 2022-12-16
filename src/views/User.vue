<script setup>  
  import { ref } from 'vue'
  import axios from 'redaxios'
  import { useUserStore } from '../../stores/user'
  import router from '../plugins/router'

  const userName = ref('')
  const email = ref('')
  const password = ref('')
  const passwordAgain = ref('')
  const error = ref('')
  const userData = useUserStore()

  const register = () => {
    if(!userName.value || !email.value || !password.value || !passwordAgain.value){
      error.value = 'Töltsd ki az összes mezőt!'
      return
    } 

    if(password.value != passwordAgain.value){
      error.value = 'A két jelszó nem ugyanaz! Írd be újra!'
      return
    }

   axios.post('api/user/create', {
    userName: userName.value,
      email: email.value,
      password: password.value
    }).then(resp => {
      console.log(resp.data);
      userData.user = resp.data;
      router.push({path:'/post'})})
    .catch(err => (error.value = 'Hibás regisztráció, próbáld meg újra!'))
  }

</script>

<template>

  <form v-on:submit.prevent="register" method="POST" action="Post.vue" class="login-form">
    <h1>User Register</h1>
    <div class="error">
      {{ error }}
    </div>
    <input class="input-name" type="text" placeholder="név" v-model="userName">
    <input class="input-email" type="email" placeholder="email" v-model="email">
    <input class="input-pass" type="password" placeholder="password" v-model="password">
    <input class="input-pass" type="password" placeholder="password újra" v-model="passwordAgain">
    <button type="submit">login</button>
  </form>
  

  
</template>

<style scoped>
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  button {
    background-color: purple;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    width: 20vw;
  }

  form input::placeholder {
    color: #fff;
  }

  .login-form {
    background-color: orange;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .error {
    color: purple;
  }

  .input-email, .input-name {
    background-color: var(--blue);
    color: #fff;
    margin: 0.5rem;
    padding: 0.1rem;
    width: 20vw;
  }

  .input-pass {
    background-color: var(--blue);
    color: #fff;
    margin: 0.5rem;
    padding: 0.1rem;
    width: 20vw;
  }
</style>