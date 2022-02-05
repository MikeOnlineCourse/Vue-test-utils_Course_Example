import { shallowMount, mount } from "@vue/test-utils";
import App from "./App.vue";

describe("App.vue", () => {
  it("render shallowMount", () => {
    const wrapper = shallowMount(App);
    // console.log("shallowMount =>", wrapper.text());
    expect(wrapper.text()).toMatch("Test demo");
  });

  it("render mount", () => {
    const wrapper = mount(App);
    // console.log("mount =>", wrapper.text());
    expect(wrapper.text()).toMatch("Test demo");
  });
});
