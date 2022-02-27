import { createStore } from "vuex";
import { store } from "./index.js";

// 偽造的 Store
const createVuexStore = (initState) =>
  createStore({
    state() {
      return {
        count: 0,
        ...initState,
      };
    },
    actions: {
      addCount(context) {
        context.commit("addCount");
      },
    },
    mutations: {
      addCount(state) {
        state.count++;
      },
    },
  });

describe("test Store commit", () => {
  // 用原本的store進行測試
  it("control open state", async () => {
    const $store = createStore(store);
    $store.dispatch("handleOpenState");
    expect($store.state.isOpen).toBe(true);
    $store.dispatch("handleOpenState");
    expect($store.state.isOpen).toBe(false);
  });

  // 為了可以自訂定義state的初始狀態，所以偽造了一個一樣的Store
  it("user setting store count ", () => {
    const $store = createVuexStore({ count: 5 });
    $store.dispatch("addCount");
    expect($store.state.count).toBe(6);
  });
});
