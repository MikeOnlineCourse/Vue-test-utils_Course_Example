<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const idx = ref(0);

    const add = () => {
      idx.value++;
    };
    const remove = () => {
      idx.value--;
    };

    return { idx, add, remove };
  },
};
</script>
<template>
  <h1>{{ idx }}</h1>
  <div class="btn-box">
    <button id="add" class="add-btn" @click="add">add 按鈕</button>
    <button id="remove" class="remove-btn" @click="remove">remove 按鈕</button>
  </div>
</template>

<style scoped>
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto;
}
</style>
