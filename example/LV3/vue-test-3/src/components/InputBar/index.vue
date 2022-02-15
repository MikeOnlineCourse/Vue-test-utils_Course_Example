<script>
import { computed } from "vue";
export default {
  props: {
    thousand: {
      type: String,
      default: "1000",
    },
  },
  setup(props) {
    const num = computed(() =>
      props.thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
    return {
      num,
    };
  },
};
</script>
<template>
  <ul>
    <li>
      name:
      <input class="name" type="text" placeholder="輸入名字" />
    </li>
    <li>
      email:
      <input class="email" type="text" placeholder="輸入email" />
    </li>
    <li>
      num
      <input class="num" type="text" :value="num" disabled />
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: block;
  margin-bottom: 20px;
}
li {
  margin-bottom: 10px;
  font-size: 22px;
}
input {
  font-size: 22px;
  height: 30px;
}
</style>
