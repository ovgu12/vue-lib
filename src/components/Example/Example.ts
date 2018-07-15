import {BasicChart, QuoteFeedSimulator} from '@platform.shared.libs.typescript/chartiq';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Example extends Vue {
  /** ------------ Getter / Setter ------------ */

  public get text() {
    return 'Example Text';
  }

  public mounted() {
    this.drawChart();
  }

  protected drawChart() {
    const el = this.$el.parentElement as HTMLElement;
    const basicChart = new BasicChart(el);
    const feed = new QuoteFeedSimulator(154.3);
    basicChart.attachQuoteFeed(feed.createQuotefeed(), {refreshInterval: 1});
    basicChart.drawChart('Basic');
  }
}
