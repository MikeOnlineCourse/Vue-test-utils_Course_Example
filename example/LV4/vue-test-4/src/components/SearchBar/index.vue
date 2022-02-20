<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const searchData = ref({
      媽祖: [
        {
          title: "台灣媽祖信仰- 维基百科，自由的百科全书",
          link: "https://zh.wikipedia.org/zh-tw/台灣媽祖信仰",
          text: "媽祖信仰是臺灣普遍民間信仰。早期移民多自華南渡海，心驚膽顫，且台灣四面環海，海上活動頻繁，海神媽祖婆成臺灣人重要精神託付。臺灣有媽祖廟510座以上，有 ...",
        },
        {
          title: "媽祖的介紹",
          link: "www.ntcu.edu.tw/edison/otm/__1.html",
          text: "媽祖就是「天上聖母」，我們一般通稱「媽祖」或「媽祖婆」。 媽祖是古時候的宋朝人，她的本名叫「林默娘」，從小就相當相當聰明，讀經書過目不忘。 媽祖十三歲的時後 ...",
        },
      ],
      地震: [
        {
          title: "地震 - 中央氣象局",
          link: "https://www.cwb.gov.tw/V7/earthquake/",
          text: "資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...",
        },
      ],
      館長: [
        {
          title: "館長成吉思汗- YouTube",
          link: "https://www.youtube.com/channel/UCnnp2fWa77PP2h08T7WAzzw",
          text: "健身格鬥者的天堂成吉思汗健身俱樂部進化綜合格鬥中心https://www.facebook.com/mmagym.tw?ref=bookmarks 惡名昭彰全新 ",
        },
        {
          title: "陳之漢- 维基百科，自由的百科全書",
          link: "https://zh.wikipedia.org/zh-tw/陳之漢",
          text: "陳之漢（1979年3月12日－），原名陳思翰，臺灣知名部落客、直播主、網路名人、企業家、運動員、健身教練、散打武術家，曾任志願役軍人，後為連鎖健身房創辦人兼執行長、「中華民國健力協會」顧問、服飾品牌創辦人。生於臺北蘆洲（今新北市蘆洲區），籍貫宜蘭，人稱「館長」。",
        },
      ],
      線上課程: [
        {
          title: "Vue 單元測試 vue-test-utils｜入門",
          link: "https://thecodingpro.com/courses/vue-test-utils",
          text: "若你是寫過 Vue 但沒有寫過單元測試的工程師，這堂課程你將會學習到使用 vue-test-utils 更有效率地完成 Vue 的單元測試！因此課程將建立在已熟悉 Javascript、Vue3 的同學來學習，比較不適合尚未寫過 Vue 或沒用過 Vue-cli、Vite 的同學上課唷！",
        },
      ],
    });

    const searchText = ref("線上課程");

    const handleSearchText = (str) => {
      searchText.value = str;
    };

    return { searchText, searchData, handleSearchText };
  },
};
</script>
<template>
  <div class="searchbar">
    <input v-model="searchText" class="seach" type="text" />
    <p>
      最近熱門搜尋:
      <a
        class="tag text1"
        href="javascript:;"
        @click="handleSearchText('媽祖')"
      >
        媽祖 、
      </a>
      <a
        class="tag text2"
        href="javascript:;"
        @click="handleSearchText('地震')"
      >
        地震 、
      </a>
      <a
        class="tag text3"
        href="javascript:;"
        @click="handleSearchText('館長')"
      >
        館長 、
      </a>
      <a
        class="tag text4"
        href="javascript:;"
        @click="handleSearchText('線上課程')"
      >
        線上課程
      </a>
    </p>
    <div class="search_list">
      <div
        class="item"
        v-for="item in searchData[searchText]"
        :key="item.title"
      >
        <a href="javascript:;" target="_blank" class="title">
          {{ item.title }}
        </a>
        <a :href="item.link" target="_blank" class="link">{{ item.link }}</a>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.searchbar {
  width: 500px;
}

.searchbar > p {
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
}
.searchbar > p > a {
  color: #fff;
  font-weight: bold;
}
.seach {
  width: 100%;
  height: 30px;
  padding-left: 5px;
  margin-bottom: 10px;
}
.search_list {
  width: 100%;
}
.search_list > .item {
  width: 100%;
  background-color: #fff;
  padding: 30px 30px 25px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.search_list > .item > a {
  display: block;
}
.search_list > .item > a.title {
  color: #000;
  text-decoration: none;
  font-size: 20px;
}
.search_list > .item > a.link {
  font-size: 12px;
  color: cornflowerblue;
}
.search_list > .item > a:hover {
  color: rgb(40, 102, 218);
}
.search_list > .item > p {
  font-size: 12px;
  line-height: 20px;
}

#btn {
  cursor: pointer;
  display: block;
  width: 200px;
  height: 50px;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 3px 5px #000;
  background-color: #fff;
  font-size: 20px;
  outline: none;
}
</style>
