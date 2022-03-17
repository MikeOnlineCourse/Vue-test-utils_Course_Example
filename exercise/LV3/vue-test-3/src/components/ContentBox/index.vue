<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: true,
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
  <div v-show="props.isOpen" class="box"></div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 0 auto;
}
</style>
