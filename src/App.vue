<script setup>
import { RouterView, RouterLink } from 'vue-router'
import LoginApp from './components/LoginApp.vue';
import { useUserStore } from '../stores/user'

const userData = useUserStore()
</script>

<template>
  <header></header>
  
  <main class="main-container">
    <nav class="navigation">
      <ul class="nav-ul">
        <li><router-link class="nav-ul-li" :to="{name: 'home'}">Home</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'about'}">About</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'user'}">User</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'post'}">Post</router-link></li>
        <li><router-link class="nav-ul-li" :to="{name: 'blog'}">Blog</router-link></li>
        <li><router-link class="nav-ul-hir" :to="{name: 'hirlevel'}">Hirlevel</router-link></li>
      </ul>
    </nav>     
    <router-view /> 
  </main>

  <footer>
    <div class="footer-div">
      &copy; 2022-2023 Hadik-Art, all rights reserved
    </div>
  </footer>
</template>

<style scoped>

.login-app {
  position: fixed;
  bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .main-container {
    /* display: flex; */
    min-height: 100vh;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    /* position: relative; */
    margin: auto;
  }

.footer-div{
    /* background-color: #bbb; */
    color: orange;
    font-size: 1.5rem;
    position: absolute;
    flex-shrink: 0;
    /* bottom: 0; */
    width: 100%;
    height: 2.5rem; 
    margin-top: 1rem;
    text-align: center; 
}

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  

  .navigation {
    font-family: Arial;
    /* position: absolute; */
    top: 20px;
    font-size: 17px;
    text-transform: uppercase;
    /* justify-content: center; 
    align-items: center; */
  }

  .navigation ul li {
    list-style-type: none;
  }

  .nav-ul {
    display: flex;
  }

  .nav-ul-li {
    /* display: flex; */
    color: #fff;
    text-decoration: none;
    /* text-align: center; */
    padding: 15px;
  }

  .nav-ul-hir {
    /* display: flex; */
    color: #fff;
    text-decoration: none;
    /* margin-top: 30px; */
   
  }

  </style>
  