<script setup>
  import { ref } from 'vue'

  const email = ref('hadikp@gmail.com')
  const password = ref('')
  const error = ref('')

  const login = () => {
    if(!email.value || !password.value){
      error.value = 'Töltsd ki mindkét mezőt!'
      return
    } 
  }

</script>

<template>
  
  <form class="login-form" v-on:submit.prevent="login">
    <h1>User Login</h1>
    <div class="error">
      {{ error }}
    </div>
    <input class="input-email" type="email" placeholder="email" v-model="email">
    <input class="input-pass" type="password" placeholder="password" v-model="password">
    <button>login</button>
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