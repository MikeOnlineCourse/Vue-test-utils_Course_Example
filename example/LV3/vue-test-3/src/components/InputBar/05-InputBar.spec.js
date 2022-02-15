import { mount } from "@vue/test-utils";
import InputBar from "@/components/InputBar";

describe("InputBar.vue", () => {
  it("input set Value", async () => {
    const wrapper = mount(InputBar);
    await wrapper.find("input.name").setValue("Mike");
    expect(wrapper.find("input.name").element.value).toBe("Mike");
    await wrapper.find("input.email").setValue("1208966@gmail.com");
    expect(wrapper.find("input.email").element.value).toBe("1208966@gmail.com");
  });

  it("props computed change input value", async () => {
    const wrapper = mount(InputBar);
    await wrapper.setProps({ thousand: "3012300" });
    expect(wrapper.find("input.num").element.value).toBe("3,012,300");
  });
});
