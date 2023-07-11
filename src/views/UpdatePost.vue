<script>
import axios from 'redaxios';
import router from '../plugins/router';

export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          content: '',
        }
      }
    },
    async created() { //a card form-ba töltése az adatbázisból
      try {
        const resp = await axios.get(`api/post/${this.$route.params.id}`)
        this.form = resp.data
        console.log(resp.data)
      } catch (e) {
        error.value = 'Valami hiba történt, próbáld meg újra'
      }
    }, 
    methods: {
      update() {
      axios.put(`http://localhost:8080/api/post/${this.$route.params.id}`, //card update
       this.form ).then(resp => {
        console.log(resp.data)
        router.push({name:'board'})
      })
        .catch(err => (error.value = 'Valami hiba történt az Update-nél, próbáld meg újra'))
      }
   }
  }

</script>

<template>
   <main>
     <h1>Update Post</h1>
    <form class="post-form" v-on:submit.prevent="update()">  <!-- sendPost -->
        <input class="post-title" type="text"  v-model="form.title">
        <input class="post-description" type="text"  v-model="form.description">
        <textarea class="post-content" rows="13"  v-model="form.content"></textarea>
      <div class="buttons">
        <button class="buttons-cancel">mégse</button>
        <button class="buttons-update">update</button>
      </div>
    </form>
</main>
</template>

<style scoped>

.buttons {
  margin: 1rem;
}

.buttons-cancel, .buttons-update {
  background-color: #ff2b75;
  box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-family:'Gill Sans', 'Gill Sans MT';
  padding: 0.4rem 0.8rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  margin: 0.1rem 0.1rem;
}

.buttons-update {
  margin-left: 2rem;
  background-color: orange;
}



h1 {
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
}

.post-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.post-title, .post-content, .post-description {
  color: #000;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0.5rem;
  padding: 0.1rem;
  width: 90%;
}
</style>