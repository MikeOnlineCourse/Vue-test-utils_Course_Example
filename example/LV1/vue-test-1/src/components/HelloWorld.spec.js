import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders msg text", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toBe("new message");
  });
});
