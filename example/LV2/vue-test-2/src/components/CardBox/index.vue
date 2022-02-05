<script>
import ImageBox from "./ImageBox.vue";
import Content from "./Content.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    ImageBox,
    Content,
  },
  setup() {
    const isOpenContent = ref(false);
    return {
      isOpenContent,
    };
  },
};
</script>

<template>
  <div id="CardBox">
    <ImageBox />
    <Content v-if="isOpenContent" />
  </div>
</template>

<style>
#CardBox {
  width: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.404);
}
</style>
