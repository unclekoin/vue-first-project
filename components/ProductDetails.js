app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<div>
      {{ title }}
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>`,
  data() {
    return {
      title: 'Details',
    };
  },
});
