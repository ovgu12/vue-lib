import {Component, Vue} from 'vue-property-decorator';
import {HelloWorld} from '../components';

@Component({components: {HelloWorld}})
export default class App extends Vue {}