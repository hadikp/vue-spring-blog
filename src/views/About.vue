<script setup>

import { ref } from 'vue';
import Pagination from '../components/Pagination.vue';

let currentPage = ref(1)

function onPageChange(page) {
   console.log(page)
   return currentPage.value = page;
}


</script>

<template>
  <h1 class="text-primary">About page</h1>
  <div class="paginator">
    <pagination
      :totalPages="11"
      :total="113"
      :perPage="5"
      :current-page="currentPage"
      @pagechanged="onPageChange"
></pagination>
 
  </div>
  
</template>

<style scoped>
  .paginator {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>