<script setup>

</script>

<template>
  
  <form class="login-form">
    <h1>User Login</h1>
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
    width: 10vw;
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

  .input-email {
    background-color: var(--blue);
    color: #fff;
    margin: 0.5rem;
    padding: 0.1rem;
    width: 10vw;
  }

  .input-pass {
    background-color: var(--blue);
    color: #fff;
    margin: 0.5rem;
    padding: 0.1rem;
    width: 10vw;
  }
</style>