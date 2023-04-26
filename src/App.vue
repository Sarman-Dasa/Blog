<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <div class="link">
    <router-link to="/">Home</router-link>
    <router-link to="/php">Php</router-link>
    <router-link to="/laravel">Laravel</router-link>
    <router-link to="/vue">Vue js</router-link>
    <router-link to="/user-data">user-data</router-link>
    <router-link to="/watcher">Volume</router-link>
    <router-link to="/profile/1">Dharmik' Profile</router-link>
    <router-link to="/profile/2">Hitesh' Profile</router-link>
  </div>

  <div class="main">
    <router-view></router-view>
  </div>

  <teleport to="#footer">
    <Footer />
  </teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.link {
  background-color: black;
  padding: 20px;
  width: 97%;
}

.link a {
  color: #fff;
  border: 2px solid rgb(30, 137, 208);
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
}

.main {
  background-color: azure;
  padding: 20px;
  position: relative;
  width: 50%;
  margin: 2% 15%;
  border: #000 5px solid;
}
</style>
