import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import { store } from "@/store";
import MenuSlid from "./MenuSlid.vue";

describe("MenuBtn.vue", () => {
  it("test Vuex action change state", async () => {
    const wrapper = shallowMount(MenuSlid, {
      global: {
        plugins: [createStore(store)],
      },
    });

    expect(wrapper.find(".menu").classes().includes("open")).toBe(false);
    await wrapper.find(".closeBtn").trigger("click");
    expect(wrapper.find(".menu").classes().includes("open")).toBe(true);
  });
});
