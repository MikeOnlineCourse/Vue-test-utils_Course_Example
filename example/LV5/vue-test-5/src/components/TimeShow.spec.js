import { mount } from "@vue/test-utils";
import TimeShow from "./TimeShow.vue";

jest.mock("../lib", () => ({
  secondsFormat: jest.fn(() => "00:00:00"),
}));

describe("TimeShow.vue", () => {
  it("mock function jest.fn()", () => {
    const wrapper = mount(TimeShow);
    expect(wrapper.find("h1").text()).toBe("time: 00:00:00");
  });
});
