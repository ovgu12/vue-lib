import {shallowMount} from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should mount ok', () => {
    const text = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        text,
      }
    });
    expect(wrapper.find('.hello').element.textContent.trim())
        .toEqual('Hello World');
  });
});
