<script>
export default {};
</script>
<template>
  <div class="photo">
    <div v-if="false" id="box1" class="box red"></div>
    <div v-show="false" id="box2" class="box blue"></div>
  </div>
</template>

<style scoped>
.photo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 160px;
  height: 160px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
</style>
