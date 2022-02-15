import { mount } from "@vue/test-utils";
import BoxData from "@/components/BoxData";

// https://github.com/vuejs/test-utils/issues/1058
describe("BoxData.vue", () => {
  it("setData Value change isOpen", async () => {
    const wrapper = mount(BoxData);
    await wrapper.setData({ isOpen: false });
    expect(wrapper.find(".box_data").isVisible()).toBe(false);
  });
});
