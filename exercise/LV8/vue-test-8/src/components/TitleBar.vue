<template>
  <div class="title_bar">
    <img class="icon" src="../assets/logo.png" alt="">
    <h1 class="title">
      <slot></slot>
    </h1>
    <p class="detail">
      <slot name="detail"></slot>
    </p>
  </div>
</template>

<style scoped>
  .title_bar {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  img.icon {
    display: block;
    width: 30px;
    height: 30px;
    margin: 10px;
  }
  .title_bar h1.title {
    font-size: 26px;
  }

  .title_bar p.detail {
    font-size: 12px;
    color: red;
    padding-left: 30px;
    transform: scale(0.6);
  }
</style>