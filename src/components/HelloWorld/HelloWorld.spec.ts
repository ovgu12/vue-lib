import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("HelloWorld.vue", () => {
  let wrapper: any;
  it('should render text "HelloW World"', () => {
    wrapper = mount(HelloWorld, {
      propsData: {
        text: "World"
      }
    });
    expect(wrapper.element.textContent).toEqual("Hello World");
  });
});
