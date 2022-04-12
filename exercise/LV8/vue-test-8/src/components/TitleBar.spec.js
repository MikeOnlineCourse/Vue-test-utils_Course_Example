import { mount } from "@vue/test-utils";
import TitleBar from "./TitleBar.vue";

describe("TitleBar.vue", () => {
  it("renders slots content", () => {
    const wrapper = mount(TitleBar);
  });
});
