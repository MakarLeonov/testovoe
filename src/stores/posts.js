import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostStore = defineStore('posts', () => {
  
  const users = ref([])
  const usersAge = [23, 19, 34, 21, 26, 18, 22, 30, 24, 27]

  async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  }

  return { users, getUsers, usersAge }
})
