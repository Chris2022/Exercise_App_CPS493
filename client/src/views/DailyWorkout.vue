<template>
  <section class="section">
    <h1 class="title animate__animated animate__bounceInLeft">Daily Workout</h1>
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
import session from "../services/session";

const HANDLE = { handle: session.user.handle };
export default {
  components: {
    AddCardio,
    AddWeight,
  },
  data() {
    return {
      activetab: 1,
      email: null,
      password: null,
      session,
      LABEL: "",
      REP: " ",
      SET: " ",
      TIME_TAKEN: " ",
      NOTES: " ",
      NAME: "",
      CAL: "",
      TIME: "",
      DISTANCE: "",
      newCardio: { name: "", distance: "", calories: "", time: "", handle: "" },
      newWeight: {
        workout_name: " ",
        rep: " ",
        set: " ",
        time_taken: " ",
        notes: " ",
        handle: " ",
      },
    };
  },
  async mounted() {
    this.newCardio.name = this.NAME;
    this.newCardio.distance = this.DISTANCE;
    this.newCardio.calories = this.CAL;
    this.newCardio.time = this.TIME;
    this.newCardio.handle = HANDLE.handle;

    this.newWeight.workout_name = this.LABEL;
    this.newWeight.rep = this.REP;
    this.newWeight.set = this.SET;
    this.newWeight.time_taken = this.TIME_TAKEN;
    this.newWeight.notes = this.NOTES;
    this.newWeight.handle = this.HANDLE;
  },
  methods: {
    login() {
      this.session.Login(this.email, this.password);
    },
    async add() {
      const cardio = await Add(this.newCardio);
      const weight = await Add(this.newWeight);
      if (cardio) {
        this.$oruga.notification.open({
          message: "Cardio Workout Succesfully Recorded!",
          variant: "info",
          position: "top",
          closable: true,
        });
      } else if (weight) {
        this.$oruga.notification.open({
          message: "Weight Workout Succesfully Recorded!",
          variant: "info",
          position: "top",
          closable: true,
        });
      } else {
        this.$oruga.notification.open({
          message: "Error, workout not recorded ! Please try again later!",
          variant: "danger",
          position: "top",
          closable: true,
        });
      }
    },
  },
};
</script>

<style>
</style>