<template>
  <div class="container">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-black-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-black-200">
              <thead class="bg-black-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                    SL.
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                    Roll
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="bg-dark divide-y divide-black-200">
                <tr v-for="(student,index) in students" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-black-900">
                      {{ index+1 }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-black-900">
                      {{ student.name }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-black-900">
                      {{ student.roll }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex items-center justify-center bg-black-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" @submit.prevent="studentFormSubmit">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Name</label>
              <input
                v-model="name"
                type="text"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-black-300 placeholder-black-500 text-black-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              >
            </div>
            <div>
              <label for="password" class="sr-only">Roll</label>
              <input
                v-model="roll"
                type="text"
                class="appearance-none my-5 rounded-none relative block w-full px-3 py-2 border border-black-300 placeholder-black-500 text-black-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Roll"
              >
            </div>
          </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: lock-closed -->
              </span>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      roll: ''
    }
  },
  computed: {
    students () {
      return this.$store.state.students
    }
  },
  methods: {
    studentFormSubmit () {
      // this.$store.state.students.push( name: this.name, roll: this.roll );
      this.store.commit('studentAdd', { name: this.name, roll: this.roll })
    }
    // increment () {
    //   this.$store.commit('increment', 1)
    // },
    // decrement () {
    //   this.$store.commit('decrement', 1)
    // }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
