import { shallowMount } from "@vue/test-utils";
import PhotoItem from "./index.vue";

describe("PhotoItem.vue", () => {
  it("DOM is v-if or v-show hide", () => {
    const wrapper = shallowMount(PhotoItem);

    // exists 用來判斷DOM是否給 v-if 隱藏起來
    expect(wrapper.find("#box1").exists()).toBe(false);
    // isVisible 用來判斷DOM是否給 v-show 隱藏起來
    expect(wrapper.find("#box2").isVisible()).toBe(false);
  });

  // it("DOM is v-if or v-show hide error", () => {
  //   const wrapper = shallowMount(PhotoItem);
  //   expect(wrapper.find("#box1").isVisible()).toBe(false);
  //   expect(wrapper.find("#box2").exists()).toBe(false);
  // });
});
