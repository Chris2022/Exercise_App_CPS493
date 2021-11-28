<template>
  <section class="section">
    <h1 class="title">Calorie Intake</h1>
    <h2 class="subtitle">
      Keeping track of your calorie intake is important, so keep a track of the
      foods you eat and their calories throughout the day. Fill the form the
      form out and hit submit and you're all set!
      View your logs <router-link to="/foods">Here!</router-link>
    </h2>
    <add-food :new-food="newFood" @add="add()" />
  </section>
</template>

<script>
import Session from "../services/session";
import { Add } from "../services/Food";
import addFood from "../components/addFood.vue";
export default {
  components: { addFood },
  data: () => ({
    email: null,
    password: null,
    Session,
    newFood: { name: " ",drink:" ", amount: 0, handle: "" },
  }),
  async mounted() {
    this.newFood.name = "";
    this.newFood.drink = " ";
    this.newFood.amount = " ";
    this.newFood.handle = Session.user.handle;
  },
  methods: {
    async add() {
      const response = await Add(this.newFood);
      if (response) {
        this.$oruga.notification.open({
          message: "Food Successfully Recorded!",
          variant: "info",
          position: "top",
          closable: true,
        });
      }
    },
    login() {
      this.Session.Login(this.email, this.password);
    },
  },
};
</script>

<style>
.tabular {
  text-align: center;
}
</style>