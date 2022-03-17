<script>
import { ref } from "vue";
import data from "./data.json";
export default {
  setup() {
    const employeeItem = ref(data);
    return {
      employeeItem,
    };
  },
};
</script>

<template>
  <ul class="item">
    <li class="user_list" v-for="item in employeeItem" :key="item.id">
      <div>
        <p>員工編號: {{ item.userId }}</p>
        <p>姓名: {{ item.username }}</p>
      </div>
    </li>
  </ul>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
ul.item {
  width: 98%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}
ul.item li {
  width: 33%;
  height: 70px;
  border: 1px solid #000;
  font-size: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 5px;
}
ul.item li img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
ul.item li div > p {
  text-align: left;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.9);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup .card {
  position: relative;
  width: 33%;
  height: 70px;
  border: 1px solid #000;
  font-size: 12px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 5px;
  background-color: #fff;
}
.card #close {
  position: absolute;
  right: 20px;
  display: block;
  width: 30px;
  height: 30px;
  font-size: 20px;
}
.card img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.card div > p {
  text-align: left;
}
</style>
