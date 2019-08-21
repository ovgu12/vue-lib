import { mount } from '@vue/test-utils';
import { HelloWorld } from '../../src/components';

describe('HelloWorld.vue', () => {
  let wrapper: any;
  it('should render text "HelloW World"', () => {
    wrapper = mount(HelloWorld, {
      propsData: {
        text: 'World',
      },
    });
    expect(wrapper.element.textContent).toEqual('Hello World');
  });
});
