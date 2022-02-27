<script>
import { secondsFormat } from "@/lib";
import { computed } from "@vue/runtime-core";
export default {
  props: {
    time: {
      type: Number,
      default: 500,
    },
  },
  setup(props) {
    const timeFormat = computed(() => `time: ${secondsFormat(props.time)}`);
    return { timeFormat };
  },
};
</script>
<template>
  <h1>
    {{ timeFormat }}
  </h1>
</template>

<style></style>
