<script>
import HelloWorld from "./components/HelloWorld.vue";
import AddCount from "./components/AddCount.vue";
import UserList from "./components/UserList.vue";
import CardBox from "./components/CardBox";
export default {
  name: "App",
  components: {
    HelloWorld,
    AddCount,
    UserList,
    CardBox,
  },
};
</script>

<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <h1>Test demo</h1>
  <AddCount />
  <HelloWorld />
  <div class="itemFlex">
    <CardBox v-for="i in 4" :key="i" />
  </div>
  <UserList />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 60px;
}
img {
  display: block;
}
.logo {
  margin: 0 auto;
}
.itemFlex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px auto;
  width: 840px;
}
</style>
