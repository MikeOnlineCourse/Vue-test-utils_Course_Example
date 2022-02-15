import { mount } from "@vue/test-utils";
import ContentBox from "@/components/ContentBox";

describe("ContentBox.vue", () => {
  it("setData Value change isOpen", async () => {
    const wrapper = mount(ContentBox);
    await wrapper.setProps({ isOpen: false });
    expect(wrapper.find(".box").isVisible()).toBe(false);
  });
});
