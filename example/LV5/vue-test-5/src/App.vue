<script>
import ShowData from "@/components/ShowData.vue";
import TimeShow from "@/components/TimeShow.vue";
import { getUserData } from "@/api";
import { ref } from "@vue/reactivity";

export default {
  components: {
    ShowData,
    TimeShow,
  },
  setup() {
    const data = ref({});

    const fetchUserData = async () => {
      const res = await getUserData("MikeCheng1208");
      data.value = res.data;
    };
    return { fetchUserData, data };
  },
};
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TimeShow />
  <button @click="fetchUserData">get me</button>
  <ShowData :data="data" />
</template>

<style></style>
