import axios from 'axios'

export const state = () => ({
  students: []
})

export const actions = {
  studentData ({ commit }) {
    axios({ url: 'https://jsonplaceholder.typicode.com/users', method: 'GET' })
      .then((resp) => {
        const users = resp.data
        commit('fetch_users', users)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const mutations = {
  studentAdd (state, info) {
    state.students.push({
      name: info.name,
      email: info.email
    })
  },
  fetch_users (state, users) {
    state.students = users
  }
}
