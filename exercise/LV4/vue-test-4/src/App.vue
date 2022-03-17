<script>
import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    SearchBar,
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SearchBar />
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
  background-image: url("./assets/bg.jpg");
  background-size: cover;
  background-position: 50% 0%;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
