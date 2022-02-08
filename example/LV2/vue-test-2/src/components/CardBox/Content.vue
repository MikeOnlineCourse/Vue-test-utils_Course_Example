<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    styleColor: {
      type: String,
      default: "red",
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<template>
  <div class="content">
    <h1 :class="['card_title', props.styleColor]">
      Vue 單元測試 vue-test-utils
    </h1>
    <a href="javascript:;">click</a>
    <p class="card_text">
      若你是寫過 Vue 但沒有寫過單元測試的工程師, 這堂課程你將會學習到使用
      vue-test-utils 更有效率地完成 Vue 的單元測試!
    </p>
  </div>
</template>

<style>
.card_title {
  font-size: 20px;
}
.card_text {
  font-size: 12px;
}
.content {
  padding: 5px 5px 15px 5px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
