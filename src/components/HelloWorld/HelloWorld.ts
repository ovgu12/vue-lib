import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop(String) public text!: string;

  private data = {id: 1, name: 'xyz'};
}
