import axios from "redaxios"
import { defineStore } from "pinia"

export const usePostStore = defineStore('post', {
  state: () => ({post: {} 
})/*
getters: {
  getPosts: (state) => state.posts,
},
 actions: {
   fetchPosts() {
    try {
      const resp = axios.get('api/post');
      this.posts = resp.data
      console.log(resp.data);
    }
    catch {
      console.log(error)
    } 
  }
}, */
})