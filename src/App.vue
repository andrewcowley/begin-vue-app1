<template>
  <div id="app">
    <HelloWorld :message="message[0].noPulses"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function () {
    return {
      message: 'Loading...'
    }
  },
  components: {
    HelloWorld
  },
  methods:  {
    getData: async function () {
      try {
        let data = await (await fetch('pulse')).json()
        this.message = data.message
        await this.sleep()
        this.getData()
      } catch (err) {
        this.message = err.message
      }
    },
    sleep: async function () {
      await new Promise(r => setTimeout(r, 2000))
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
