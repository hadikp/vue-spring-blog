<script setup>
import { reactive, computed } from 'vue';

const range = []
const startEndPages = []

const data = reactive({
  names: [
               { id: 1, name: 'ABC CBA' },
               { id: 2, name: 'XYZ ZYX' },
               { id: 3, name: 'MNO ONM' },
               { id: 4, name: 'PQR RQP' },
               { id: 5, name: 'AAA AAA' },
               { id: 6, name: 'EFG GFE' }
            ]
})

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
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
})

const startPage = computed( () => {
    // When on the first page
    if (this.currentPage === 1) {
       return 1;
    }
    // When on the last page
    if (this.currentPage === this.totalPages) {
      return this.totalPages - this.maxVisibleButtons - 1;
    }
     // When inbetween
    return this.currentPage - 1;
    })

const endPage = computed( () => {
    return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
  })

const pages = computed( () => {
  for (let i = this.startPage; i <= this.endPage; i+=1){
    range.push({name: i, isDisabled: i === this.currentPage})
  }
  return range
})

function onClickFirstPage(){ this.$emit('pagechanged', 1) }
function onClickPreviousPage(){ this.$emit('pagechanged', this.currentPage - 1) }
function onClickPage(){ this.$emit('pagechanged', page) }
function onClickNextPage(){ this.$emit('pagechanged', this.currentPage + 1) }
function onClickLastPage(){ this.$emit('pagechanged', this.totalPages) }

</script>

<template>
  <ul>
    <li><button type="button">> First</button> </li>
    <li><button type="button">> Previous</button> </li>
    <!-- Visible Buttons Start -->
    <li v-for="page in pages" :key="page.name">
      <button type="button" :disabled="page.isDisabled"> {{ page.name }} </button>
    </li>

    <!-- Visible Buttons End -->
    <li><button type="button">> Next</button> </li>
    <li><button type="button">> Last</button> </li>
  </ul>

</template>

<style scoped>
</style>