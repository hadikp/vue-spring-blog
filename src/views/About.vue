<script setup>
import Pagination from '../components/Pagination.vue';

let currentPage = 1

function onPageChange(page) {
   console.log(page)
   currentPage = page;
}


</script>

<template>
  <h1 class="text-primary">About page</h1>
  <div class="paginator">
    <pagination
      :totalPages="10"
      :total="113"
      :perPage="5"
      :currentPage="currentPage"
      @pagechanged="onPageChange" />
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