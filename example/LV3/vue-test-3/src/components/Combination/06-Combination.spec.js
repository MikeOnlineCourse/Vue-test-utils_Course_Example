import { mount } from "@vue/test-utils";
import Combination from "@/components/Combination";

describe("Combination.vue", () => {
  it("check emit string", async () => {
    const wrapper = mount(Combination);
    await wrapper.setProps({ thousand: 3012300 });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().Combination[0][0]).toBe("3,012,300");
  });
});
