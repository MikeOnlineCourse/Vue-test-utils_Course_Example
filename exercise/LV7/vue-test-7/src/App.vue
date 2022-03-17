<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const routeArr = [
      { idx: 0, path: "" },
      { idx: 1, path: "about" },
      { idx: 2, path: "courses" },
    ];

    const idx = computed(() => {
      const path = route.path.substr(1).split("/")[0];
      const res = routeArr.filter((item) => path === item.path);
      return res[0].idx;
    });

    return { idx };
  },
};
</script>

<template>
  <div id="nav">
    <router-link id="home" :class="{ active: idx === 0 }" to="/">
      Home
    </router-link>
    |
    <router-link id="about" :class="{ active: idx === 1 }" to="/about">
      About
    </router-link>
    |
    <router-link id="courses" :class="{ active: idx === 2 }" to="/courses">
      Courses
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
}
</style>
