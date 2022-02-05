import { shallowMount } from "@vue/test-utils";
import UserList from "./UserList.vue";

describe("UserList.vue", () => {
  it("test find function", () => {
    const wrapper = shallowMount(UserList);
    // console.log(wrapper.find(".user_list").text());
    expect(wrapper.find(".user_list").text()).toMatch("員工編號: 399");
  });

  it("test findAll function", () => {
    const wrapper = shallowMount(UserList);
    // console.log(wrapper.findAll(".user_list").at(0).text());
    expect(wrapper.findAll(".user_list").at(0).text()).toMatch("員工編號: 399");
  });
});
