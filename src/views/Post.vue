<script setup>
  import { useUserStore } from '../../stores/user'
  const userData = useUserStore()
</script>

<template>
  <main v-if="userData.user.id">
     <h1>Üdvözöllek {{ userData.user.userName }} </h1>
    <p>Lorem,</p>
</main>
</template>

<style scoped>
</style>