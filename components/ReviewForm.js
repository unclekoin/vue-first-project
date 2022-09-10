app.component('review-form', {
  template:
    /* html */
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>

      <div class="review-form__recommend">
        <input type="checkbox" id="recommend" v-model="recommend" />
        <label for="recommend">Would you recommend this product?</label>
      </div>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit" />
    </form>`,
  data() {
    return {
      name: '',
      review: '',
      recommend: false,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.review || !this.rating) {
        alert('Review is incomplete');
        return;
      }
      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = false;
    },
  },
});
