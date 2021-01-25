export const state = () => ({
  // counter: 0
  students: [
    { name: 'arif', roll: 12345 },
    { name: 'ariful', roll: 12345 }
  ]
})

export const mutations = {
  studentAdd (state, { info }) {
    state.students.push({
      name: info.name,
      roll: info.roll
    })

    // add(state, { text }) {
    //   state.list.push({
    //     text,
    //     done: false
    //   })
  }
}
