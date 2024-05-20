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
      :perPage="10"
      :currentPage=1
      @pagechanged="onPageChange" />
  </div>
  
</template>

<style scoped>
  .paginator {
    position: fixed;
    bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>