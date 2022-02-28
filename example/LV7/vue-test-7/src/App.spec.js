import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";
import App from "./App.vue";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(() => ({
    path: "",
  })),
  useRouter: jest.fn(() => ({
    push: () => {},
  })),
}));

describe("App.vue", () => {
  it("route test", () => {
    // 設定一開始 path 的路徑
    useRoute.mockImplementation(() => ({
      path: "/courses",
    }));

    const wrapper = mount(App, {
      global: {
        stubs: ["router-link", "router-view"],
      },
    });

    // 判斷陣列中元素可使用 toContain
    expect(wrapper.find("#courses").classes()).toContain("active");
    // 或這樣
    expect(wrapper.find("#courses").classes().includes("active")).toBe(true);
  });
});
