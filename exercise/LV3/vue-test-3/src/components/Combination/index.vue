<script>
import { computed } from "vue";
export default {
  props: {
    thousand: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const num = computed(() =>
      props.thousand.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
    const handleProps = () => {
      const money = `${num.value}`;
      emit("Combination", money);
    };

    return {
      handleProps,
    };
  },
};
</script>

<template>
  <button @click="handleProps">計算金額</button>
</template>

<style scoped>
button {
  display: block;
  width: 200px;
  height: 30px;
  margin: 0 auto;
  font-size: 20px;
}
</style>
