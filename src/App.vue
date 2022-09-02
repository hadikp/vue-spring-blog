<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Welcome from './components/Welcome.vue';
</script>

<template>
  <header></header>
  <main>
    <!-- Fullscreen Video -->
    <div class="fullscreen-bg">
      <video class="fullscreen-bg_video" loop autoplay muted poster="./assets/hatter.jpg"><source src="./assets/hattervideo.mp4"></video>
    </div>
    <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
    <Welcome />
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
  