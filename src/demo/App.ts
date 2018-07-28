import {Component, Vue} from 'vue-property-decorator';
import {HelloWorld, Icon} from '../components';

@Component({
  components: {
    HelloWorld,
    Icon,
  }
})
export default class App extends Vue {}