<script setup>

import { ref } from 'vue';
import Pagination from '../components/Pagination.vue';

let currentPage = ref(1)

const totalPages = 12
const perPage = 5

function onPageChange(page) {
   console.log(page)
   return currentPage.value = page;
}

const datas = ref({
  name: [
               { id: 1, name: 'Peter1' },
               { id: 2, name: 'Peter2' },
               { id: 3, name: 'Peter3' },
               { id: 4, name: 'Peter4' },
               { id: 5, name: 'Peter5' },
               { id: 6, name: 'Peter6' },
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
      <li class="paginator-li" v-for="data in datas.name" :key="data.id"> {{ data.name }} </li>
    </ul>
    <pagination
      :totalPages=totalPages
      :perPage=perPage
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
    color: white;
    margin-top: 60px;
  }

  .paginator-li{
    list-style-type: none;
  }
</style>