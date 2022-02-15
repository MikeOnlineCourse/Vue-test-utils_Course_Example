<script>
import { ref } from "vue";
import CountList from "./components/CountList";
import ContentBox from "./components/ContentBox";
import BoxData from "./components/BoxData";
import AddCount from "./components/AddCount";
import InputBar from "./components/InputBar";
import Combination from "./components/Combination";
export default {
  name: "App",
  components: {
    CountList,
    AddCount,
    BoxData,
    ContentBox,
    InputBar,
    Combination,
  },
  setup() {
    const num = ref("0");

    const setNun = (coin) => {
      num.value = coin;
    };

    return {
      num,
      setNun,
    };
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CountList />
  <AddCount />
  <InputBar />
  <Combination :thousand="21821671" @Combination="setNun" />
  <h1>{{ num }}</h1>
  <BoxData />
  <ContentBox />
</template>

<style lang="scss">
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
}
</style>
