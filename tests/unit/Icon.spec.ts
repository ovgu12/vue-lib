import {shallowMount} from '@vue/test-utils';
import Icon from '../../src/components/Icon/Icon.vue';

describe('Icon.vue', () => {
  const _class = 'btn-test';
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Icon, {
      propsData: {
        _class,
      }
    });
  });
  test('should mount ok', () => {
    expect(wrapper.find('.btn-test').element.textContent.trim())
        .toEqual('Click me');
  });
});
