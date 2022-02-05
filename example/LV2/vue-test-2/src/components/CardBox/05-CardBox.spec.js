import { mount } from "@vue/test-utils";
import CardBox from "./index.vue";
import ImageBox from "./ImageBox.vue";
import Content from "./Content.vue";

describe("CardBox.vue", () => {
  it("findComponent function test", () => {
    const wrapper = mount(CardBox);
    // console.log(wrapper.findComponent(ImageBox).html());
    // console.log(wrapper.findComponent(Content).html());

    // 要直接抓 component 可以使用 findComponent
    expect(wrapper.findComponent(ImageBox).exists()).toBe(true);
    expect(wrapper.findComponent(Content).exists()).toBe(false);
  });
});
