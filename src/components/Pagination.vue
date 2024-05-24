<script setup>
import { reactive, computed, defineEmits } from 'vue';

const emit = defineEmits(['pagechanged'])


/* const data = reactive({
  names: [
               { id: 1, name: 'ABC CBA' },
               { id: 2, name: 'XYZ ZYX' },
               { id: 3, name: 'MNO ONM' },
               { id: 4, name: 'PQR RQP' },
               { id: 5, name: 'AAA AAA' },
               { id: 6, name: 'EFG GFE' }
            ]
}) */

const props = defineProps({
  maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true,
    }
})

const startPage = computed( () => {
    // When on the first page
    if (props.currentPage === 1) {
       return 1;
    }
    // When on the last page
    if (props.currentPage === props.totalPages) {
      return props.totalPages - props.maxVisibleButtons + 1;
    }
     // When inbetween
    return props.currentPage - 1;
    })

const endPage = computed( () => {
    return Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages) ; 
  })

const pages = computed( () => {
  const range = []
  for (let i = startPage.value; i <= endPage.value; i += 1){
    range.push({name: i, isDisabled: i === props.currentPage}) 
  }
  console.log(range)
  return range
})

const isInFirstPage = computed( () => {
  return props.currentPage === 1
})

const isInLastPage = computed( () => {
  return props.currentPage === props.totalPages
})

function onClickFirstPage(){ emit('pagechanged', 1) }
function onClickPreviousPage(){ emit('pagechanged', props.currentPage - 1) }
function onClickPage(page){ emit('pagechanged', page) }
function onClickNextPage(){ emit('pagechanged', props.currentPage + 1) }
function onClickLastPage(){ emit('pagechanged', props.totalPages) }
function isPageActive(page) { return props.currentPage === page }

</script>

<template>
  <ul class="pagination">
    <li class="pagination-item"><button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">> First</button> </li>
    <li class="pagination-item"><button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">> Previous</button> </li>
    <!-- Visible Buttons Start -->
    <li class="pagination-item" v-for="page in pages" :key="page.name">
      <button type="button" @click="onClickPage(page.name)"
         :disabled="page.isDisabled" :class="{ active: isPageActive(page.name) }"> {{ page.name }} </button>
    </li>

    <!-- Visible Buttons End -->
    <li class="pagination-item"><button type="button" @click="onClickNextPage" :disabled="isInLastPage">> Next</button> </li>
    <li class="pagination-item"><button type="button" @click="onClickLastPage" :disabled="isInLastPage">> Last</button> </li>
  </ul>

</template>

<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>