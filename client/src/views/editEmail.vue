<template>
  <div class="container">
    <h1 class="title animate__animated animate__bounceInLeft">
      Edit your Email Address Here
    </h1>
    <div class="box">
      <div class="field">
        <div v-for="(value, name) in list" :key="name">
          <h2 class="subtitle" v-if="name === 'emails'">Current Email: <strong>{{value}}</strong></h2>
        </div>
      </div>
      <div class="field">
        <label class="label">Enter new Email: </label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter the new email you would like to use." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Get } from "../services/users";
import session from "../services/session";
export default {
  data() {
    return {
      list: {},
    };
  },
  async mounted() {
    this.list = await Get(session.user._id);
  },
};
</script>

<style>
</style>