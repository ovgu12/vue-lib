import {shallowMount} from '@vue/test-utils';
import {HelloWorld} from '../../src/components';

describe('HelloWorld.vue', () => {
  const text = 'World';
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: {
        text,
      }
    });
  });
  it('should mount ok', () => {
    expect(wrapper.find('.text').element.textContent.trim())
        .toEqual('Hello World');
  });
});
