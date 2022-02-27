<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const newData = computed(() => {
      const { login, avatar_url } = props.data;
      return {
        login,
        avatar_url,
      };
    });

    return {
      props,
      newData,
    };
  },
};
</script>
<template>
  <pre>
    {{ props.data }}
  </pre>
  <p class="newTie">{{ newData }}</p>
</template>

<style>
pre {
  background-color: rgb(218, 218, 218);
  border: 1px solid rgb(163, 163, 163);
  padding: 20px;
}
</style>
