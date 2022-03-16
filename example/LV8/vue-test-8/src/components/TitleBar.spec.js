import { mount } from "@vue/test-utils";
import TitleBar from "./TitleBar.vue";

describe("TitleBar.vue", () => {
  it("renders slots content", () => {
    const wrapper = mount(TitleBar, {
      slots: {
        default: "Default",
        detail: "這是預設的內容嗎?",
      },
    });
    expect(wrapper.find(".title").html()).toBe(
      '<h1 class="title">Default</h1>'
    );
    expect(wrapper.find(".detail").html()).toBe(
      '<p class="detail">這是預設的內容嗎?</p>'
    );
  });
});
