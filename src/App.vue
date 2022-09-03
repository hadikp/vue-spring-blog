<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header></header>
  <main>
    <ul>
      <li><router-link :to="{name: 'home'}">Home</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
    </ul>
   
      
    <router-view />
    
  </main>
  <footer></footer>
</template>

<style scoped>

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  