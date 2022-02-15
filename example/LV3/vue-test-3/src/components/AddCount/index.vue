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
  <h1 class="count_title">{{ idx }}</h1>
  <div class="btn-box">
    <button id="add" class="add_btn" @click="add">add 按鈕</button>
    <button id="remove" class="remove_btn" @click="remove">remove 按鈕</button>
  </div>
</template>

<style scoped>
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto 20px auto;
}
</style>
