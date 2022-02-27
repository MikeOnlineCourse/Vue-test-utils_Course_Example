<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isOpen = computed(() => {
      return store.getters["isOpen"];
    });
    const handClickMenu = () => {
      store.dispatch("handleOpenState");
    };
    return { isOpen, handClickMenu };
  },
};
</script>
<template>
  <div :class="['menu', { open: isOpen }]">
    <a class="closeBtn" @click="handClickMenu">
      <i class="fas fa-times fa-3x"></i>
    </a>
    <ul class="nav">
      <li><a>abous</a></li>
      <li><a>content</a></li>
      <li><a>user</a></li>
      <li><a>address</a></li>
    </ul>
  </div>
</template>
<style scoped>
.menu {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  z-index: 20;
  background-color: #fff;
  transition: right 0.3s;
}
.menu.open {
  right: 0px;
}
a.closeBtn {
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 50px;
  z-index: 30;
}
ul.nav {
  position: absolute;
  width: 100%;
  height: 300px;
  top: 50%;
  margin-top: -150px;
  padding: 0;
}
ul.nav > li {
  display: block;
  width: 100%;
  height: 25%;
}
ul.nav > li > a {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  line-height: 300%;
  font-size: 22px;
}
</style>
