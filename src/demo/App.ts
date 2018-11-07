import {Component, Vue} from 'vue-property-decorator';
import {Dummy, HelloWorld} from '../components';

@Component({
  components: {
    HelloWorld,
    Dummy,
  }
})
export default class App extends Vue {}