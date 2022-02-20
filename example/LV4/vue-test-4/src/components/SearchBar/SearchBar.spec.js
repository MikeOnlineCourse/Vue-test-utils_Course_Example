import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar";

describe("SearchBar.vue", () => {
  it("test toBe Expect", async () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.find(".title").text()).toBe(
      `Vue 單元測試 vue-test-utils｜入門`
    );

    await wrapper.find(".text3").trigger("click");
    const titArr = [
      "館長成吉思汗- YouTube",
      "陳之漢- 维基百科，自由的百科全書",
    ];
    wrapper.findAll(".title").forEach((element, idx) => {
      expect(element.text()).toBe(titArr[idx]);
    });
  });

  it("test toMatch Expect", async () => {
    const wrapper = mount(SearchBar);
    await wrapper.find(".text3").trigger("click");
    expect(wrapper.find(".item").html()).toMatch("館長");
  });
});
