import {shallowMount} from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const text = 'new message';
  let wrapper;
  beforeEach(() => {
    const text = 'new message';
    wrapper = shallowMount(HelloWorld, {
      propsData: {
        text,
      }
    });
  });
  it('should mount ok', () => {
    expect(wrapper.find('.hello').element.textContent.trim())
        .toEqual('Hello World');
  });
});
