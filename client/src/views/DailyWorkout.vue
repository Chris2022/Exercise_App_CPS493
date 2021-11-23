<template>
  <section class="section">
    <h1 class="title">Daily Workout</h1>
    <h2 class="subtitle">
      keep Track of those gains and log your daily workout here. Just input the
      required data and hit submit and bam you are another step closer to
      reaching your goal! You can either log in a cardio workout or a weight
      workout!
    </h2>
    <div id="tabs-with-content">
      <div class="hero-foot">
        <div class="tabs is-centered is-toggled is-fullwidth">
          <a
            v-on:click="activetab = 1"
            v-bind:class="[activetab === 1 ? 'active' : '']"
            >Log Cardio Training</a
          >
          <a
            v-on:click="activetab = 2"
            v-bind:class="[activetab === 2 ? 'active' : '']"
            >Log Weight Training</a
          >
        </div>
      </div>
    </div>
    <div v-if="activetab === 1">
      <add-cardio :new-cardio="newCardio" @add="add()" />
    </div>
    <div v-if="activetab === 2">
      <add-weight :new-weight="newWeight" @add="add()" />
    </div>
  </section>
</template>

<script>
import { Add } from "../services/workout";
import AddCardio from "../components/addCardio.vue";
import AddWeight from "../components/addWeight.vue";
import Session from "../services/session";
export default {
  components: {
    AddCardio,
    AddWeight,
  },
  data: () => ({
    activetab: 1,
    email: null,
    password: null,
    Session,
    NAME: "",
    CAL: "",
    TIME: "",
    newCardio: { name: "", calories: "", time: "" },
  }),
  async mounted() {
    this.newCardio.name = this.NAME;
    this.newCardio.calories = this.CAL;
    this.newCardio.time = this.TIME;
  },
  methods: {
    login() {
      this.Session.Login(this.email, this.password);
    },
    submit() {
      this.$oruga.notification.open({
        message: "Workout Succesfully Recorded!",
        variant: "info",
        position: "top",
        closable: true,
      });
    },
    async add() {
      await Add(this.newCardio);
    },
  },
};
</script>

<style>
</style>