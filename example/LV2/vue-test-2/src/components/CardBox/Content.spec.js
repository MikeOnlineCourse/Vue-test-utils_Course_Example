import { mount } from "@vue/test-utils";
import Content from "./Content.vue";

describe("Content.vue", () => {
  it("find and findComponent different", () => {
    const wrapper = mount(Content);
    // 文件上面所說 "使用 find 搜索組件的方式已經被廢棄並會被移除。" 指的是不要直接使用 fond 找 component。
    expect(wrapper.find(".card_title").exists()).toBe(true);
  });
});
