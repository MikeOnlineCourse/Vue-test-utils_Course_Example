import { shallowMount } from "@vue/test-utils";
import AddCount from "@/components/AddCount";

describe("AddCount.vue", () => {
  it("click add count", async () => {
    const wrapper = shallowMount(AddCount);
    await wrapper.find(".add_btn").trigger("click");
    expect(wrapper.find(".count_title").text()).toBe("1");
    await wrapper.find(".add_btn").trigger("click");
    expect(wrapper.find(".count_title").text()).toBe("2");
  });

  it("click remove count", async () => {
    const wrapper = shallowMount(AddCount);
    await wrapper.find(".remove_btn").trigger("click");
    expect(wrapper.find(".count_title").text()).toBe("-1");
    await wrapper.find(".remove_btn").trigger("click");
    expect(wrapper.find(".count_title").text()).toBe("-2");
  });
});
