<script setup>
  import { ref } from 'vue'
  import axios from 'redaxios'
  import { useUserStore } from '../../stores/user'
  import router from '../plugins/router'

  const email = ref('hadikp@gmail.com')
  const password = ref('')
  const error = ref('')
  const userData = useUserStore()

  

  /* const checkUser = () => {
    let isLoggedIn = true
    if(isLoggedIn){
       console.log("logged in")
       router.push({name: 'blog'});
    } else {
      console.log("Not logged in")
    }
  }  */

  const login = () => {
    if(!email.value || !password.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    } 

   axios.post('api/user/login', {
      email: email.value,
      password: password.value
    }).then(resp => {
      console.log(resp.data);
      userData.user = resp.data;
      router.push({path:'/post'})})
    .catch(err => (error.value = 'Hibás bejelentkezés, próbáld meg újra!'))
  }


</script>

<template>
  
   <form v-on:submit.prevent="login" method="POST" action="Post.vue" class="login-form">
    <h1>User Login</h1>
    <div class="error">
      {{ error }}
    </div>
    <input class="input-email" type="email" placeholder="email" v-model="email">
    <input class="input-pass" type="password" placeholder="password" v-model="password">
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

  .input-email {
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