import { shallowMount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("html & text", () => {
    const wrapper = shallowMount(HelloWorld);
    // console.log("html=>", wrapper.html());
    // console.log("text=>", wrapper.text());
    expect(wrapper.html()).toMatch("For a guide");
  });
});
