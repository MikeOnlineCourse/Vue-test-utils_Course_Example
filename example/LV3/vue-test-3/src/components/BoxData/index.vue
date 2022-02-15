<script>
export default {
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<template>
  <div v-show="isOpen" class="box_data"></div>
</template>

<style scoped>
.box_data {
  width: 200px;
  height: 200px;
  background-color: blue;
  margin: 0 auto;
}
</style>
