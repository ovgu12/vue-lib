import { Component, Vue } from "vue-property-decorator";
import { HelloWorld } from "../src/components";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
