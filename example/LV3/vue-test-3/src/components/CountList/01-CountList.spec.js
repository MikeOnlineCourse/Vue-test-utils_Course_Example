import { mount } from "@vue/test-utils";
import CountList from "@/components/CountList";
import { ref } from "vue";

describe("CountList.vue", () => {
  const data = {
    props: {
      count: 5,
    },
    setup(props) {
      const listIdx = ref(5);
      return { props, listIdx };
    },
  };

  it("set data value", () => {
    const wrapper = mount(CountList, data);
    expect(wrapper.find("h1").text()).toBe(`目前的人數是5人`);
  });

  it("set props value", () => {
    const wrapper = mount(CountList, data);
    expect(wrapper.find("h2").text()).toBe(`存款有5元`);
  });
});
