<script setup>

import { ref } from 'vue';
import Pagination from '../components/Pagination.vue';

let currentPage = ref(1)

function onPageChange(page) {
   console.log(page)
   return currentPage.value = page;
}

const datas = ref({
  name: [
               { id: 1, name: 'ABC CBA' },
               { id: 2, name: 'XYZ ZYX' },
               { id: 3, name: 'MNO ONM' },
               { id: 4, name: 'PQR RQP' },
               { id: 5, name: 'AAA AAA' },
               { id: 6, name: 'EFG GFE' },
               { id: 7, name: 'Peter7' },
               { id: 8, name: 'Peter8' },
               { id: 9, name: 'Peter9' },
               { id: 10, name: 'Peter10' },
               { id: 11, name: 'Peter11' },
               { id: 12, name: 'Peter12' }
            ]
})


</script>

<template>
  <h1 class="text-primary">About page</h1>
  <div class="paginator">
    <ul>
      <li v-for="data in datas.name" :key="data.id"> {{ data.name }} </li>
    </ul>
    <pagination
      :totalPages="12"
      :perPage="5"
      :current-page="currentPage"
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