import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import { store } from "@/store";
import MenuBtn from "./MenuBtn.vue";

describe("MenuBtn.vue", () => {
  it("test Vuex action change state", async () => {
    const wrapper = shallowMount(MenuBtn, {
      global: {
        plugins: [createStore(store)],
      },
    });
    await wrapper.find(".menuBtn").trigger("click");
    expect(wrapper.find(".menuBtn").classes().includes("open")).toBe(true);
  });
});
