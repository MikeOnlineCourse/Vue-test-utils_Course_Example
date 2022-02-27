<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const handClickMenu = () => {
      store.dispatch("handleOpenState");
    };

    const isOpen = computed(() => store.getters["isOpen"]);

    return { handClickMenu, isOpen };
  },
};
</script>
<template>
  <a :class="['menuBtn', { open: isOpen }]" @click="handClickMenu">
    <i class="fas fa-bars fa-3x"></i>
  </a>
</template>
<style scoped>
a.menuBtn {
  cursor: pointer;
  position: absolute;
  color: #fff;
  z-index: 10;
  top: 50px;
  right: 50px;
}
</style>
