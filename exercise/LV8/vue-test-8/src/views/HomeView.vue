<script>
import TitleBar from "@/components/TitleBar.vue";
export default {
  components: {
    TitleBar
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="content">
      <title-bar>
        地震 - 中央氣象局
        <template v-slot:detail>
          <h1>反正地震要小心喔</h1>
        </template>
      </title-bar>
      <p>資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...</p>
    </div>
    <div class="content">
      <title-bar>Vue 單元測試 vue-test-utils｜入門</title-bar>
      <p>若你是寫過 Vue 但沒有寫過單元測試的工程師，這堂課程你將會學習到使用 vue-test-utils 更有效率地完成 Vue 的單元測試！因此課程將建立在已熟悉 Javascript、Vue3 的同學來學習，比較不適合尚未寫過 Vue 或沒用過 Vue-cli、Vite 的同學上課唷！</p>
    </div>
    <div class="content">
      <title-bar>媽祖的介紹</title-bar>
      <p>媽祖就是「天上聖母」，我們一般通稱「媽祖」或「媽祖婆」。 媽祖是古時候的宋朝人，她的本名叫「林默娘」，從小就相當相當聰明，讀經書過目不忘。 媽祖十三歲的時後 ...</p>
    </div>
  </div>
</template>


<style scoped>
 .content {
   width: 500px;
    text-align: left;
   margin: 0 auto;
 }
</style>
