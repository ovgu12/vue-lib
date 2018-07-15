
import '../mocks/WebComponents.mock';
import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';

import Example from '../../src/components/Example/Example';

describe('Example.vue', () => {
  it('should have "Example" name', () => {
    const wrapper = shallowMount(Example, {
      methods: {
        drawChart: () => {
          return;
        }
      }
    });
    expect(wrapper.name()).to.equal('Example');
  });
});
