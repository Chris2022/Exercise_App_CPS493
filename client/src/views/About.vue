<template>
  <section class="section">
    <h1 class="title animate__animated animate__bounceInLeft">
      <span class="icon-text has-text-link">
        <i class="fas fa-info-circle"></i
      ></span>
      About Fit Bud
    </h1>
    <h2 class="subtitle">
      Here at Fit-Bud our goal is to help you reach your fitness goals. Whether
      you're here to track calories, mileage, track your progress in muscle
      mass, track your weight loss/gain, we strive to help you be the best you !
    </h2>
    <h2 class="subtitle">
      <span class="icon-text has-text-link">
        <i class="fas fa-question-circle"></i
      ></span>
      <strong> What is Fit-Bud?</strong>
      <p class="box">
        Fit-Bud is a fitness tracke application that is designed to help you in
        your fitness journey. Whether you are looking to increase muscle or
        loose that stubborn belly fat, Fit-Bud is with you all the way, keeping
        track of everything so you don't have too.
      </p>
    </h2>
    <h2 class="subtitle">
      <span class="icon-text has-text-link"> <i class="fas fa-heart"></i></span>
      <strong> What People Love Fit-Bud</strong>
      <p class="box">
        The simple layout and easy to use interface allows anyone of any ages to
        be able to use Fit-Bud. Because of this, Fit-Bud has become very popular
        !
      </p>
    </h2>
    <h2 class="subtitle">
      <span class="icon-text has-text-link">
        <i class="fas fa-thumbs-up"></i
      ></span>
      <strong> Why Choose us over others?</strong>
      <p class="box">
        Other fitness tracker apps overcomplicate things and require you to have
        to pay in order to get premium benefits. Fit-Bud is very simple to use
        and navigate. It also gives you a lot of premium features you would have
        to pay for in other fitness applications.
      </p>
    </h2>
    <h2 class="subtitle">
      <span class="icon-text has-text-link">
        <i class="fas fa-tachometer-alt"></i
      ></span>
      <strong> Simple Yet Powerful</strong>
      <p class="box">
        Being simple doesn't mean you have to compromise! Fit-Bud Log has many
        features others don't have such as a summary page with stats from your
        previous workout, powerful graphing of both strength and cardio
        exercises, the ability to log supersets, and much more.
      </p>
    </h2>
    <br />
    <h1 class="title">
      <span class="icon-text has-text-link"
        ><i class="fas fa-comments"></i
      ></span>
      Reviews
    </h1>
    <h2 class="subtitle">Tell us why you love Fit-Bud !</h2>
    <div class="container">
      <add-reviw :new-rev="newRev" @add="add()"/>
    </div>
    <h2 class="subtitle">Here is what people have to say about Fit-Bud!</h2>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third" v-for="rev in reviews" :key="rev">
          <div class="card">
            <div class="card-content">
              <p class="title">{{ rev.title }}</p>
              <p class="answer">{{ rev.review }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { GetAll } from "../services/reviews";
import { Add} from "../services/reviews";
import AddReviw from "../components/addRev.vue"
export default {
  components:{
    AddReviw,
  },
  data() {
    return {
      reviews: [],
      TITLE: '',
      REVIEW: '',
      newRev: ({title: " ", review: " "}),
    };
  },
  async mounted() {
    this.reviews = await GetAll();
    this.newRev.title = this.TITLE;
    this.newRev.review = this.REVIEW;
  },
  methods: {
    async add() {
      const response = await Add(this.newRev);
      if (response) {
        this.reviews.unshift(response);
      }
    },
  },
};
</script>

<style>
.columns {
  flex-wrap: wrap;
}
</style>
