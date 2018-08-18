import Vue from 'vue';
export default Vue.extend({
  props: {
    _class: {
      type: String,
      default: 'btn',
    }
  },
  methods: {
    click: () => {
      alert('U clicked me');
    },
  }
});
