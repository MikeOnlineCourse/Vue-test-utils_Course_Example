import { shallowMount } from "@vue/test-utils";
import AddCount from "./AddCount.vue";

describe("AddCount.vue", () => {
  it("test find function", () => {
    const wrapper = shallowMount(AddCount);
    // console.log(wrapper.find(".add-btn").text());
    expect(wrapper.find(".add-btn").exists()).toBe(true);
  });
  it("test get function", () => {
    const wrapper = shallowMount(AddCount);
    // console.log(wrapper.get(".remove-btn").text());
    expect(wrapper.get(".remove-btn").exists()).toBe(true);
  });

  // 錯誤區，如果找不到 toBe 就是 false
  // it("test find function error", () => {
  //   const wrapper = shallowMount(AddCount);
  //   expect(wrapper.find(".add-error").exists()).toBe(false);
  // });

  // it("test get function error", () => {
  //   const wrapper = shallowMount(AddCount);
  //   expect(wrapper.get(".remove-error").exists()).toBe(false);
  // });
});
