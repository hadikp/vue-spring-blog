<script setup>

</script>

<template>
  <!-- Fullscreen Video -->
  <div class="fullscreen">
      <video class="fullscreen-video" loop autoplay muted poster="../assets/hatter.jpg"><source src="../assets/hattervideo.mp4"></video>
  </div>
    <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
    <!-- <Welcome /> -->
  <div class="home-center">
    <h2 class="title">Bemutatom modern weblapom</h2>
  </div>
</template>

<style scoped>

  .fullscreen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
  }

  .title {
    font-size: 2rem;
  }

  .home-center {
    position: fixed;
    font-size: 2rem;
    text-align: center;
    bottom: 50%;
    /* left: 50%; */
    /* transform: translate(50%, -50%); */
  }


  
</style>