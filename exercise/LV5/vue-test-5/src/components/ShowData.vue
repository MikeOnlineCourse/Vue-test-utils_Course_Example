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
  <p class="newTie">{{ newData }}</p>
  <pre>
    {{ props.data }}
  </pre>
</template>

<style>
pre {
  width: 800px;
  background-color: rgb(218, 218, 218);
  border: 1px solid rgb(163, 163, 163);
  padding: 20px;
  margin: 20px auto 20px auto;
}
.newTie{
  display: block;
  width: 800px;
  margin: 0 auto;
}
</style>
