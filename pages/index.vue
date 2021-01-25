<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt
      </h1>
      <div class="links">
        <button
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          @click="increment"
        >
          +
        </button>
        <button
          type="button"
          class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          @click="decrement"
        >
          -
        </button>
        <div>
          {{ counter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment', 1)
    },
    decrement () {
      this.$store.commit('decrement', 1)
    }
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
