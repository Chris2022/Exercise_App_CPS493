<template>
  <div class="container">
    <h1 class="title animate__animated animate__bounceInLeft">
      Edit your Profile Picture Name Here
    </h1>
    <div class="box">
      <div class="field">
        <div v-for="(value, name) in list" :key="name">
          <h2 class="subtitle" v-if="name === 'pic'">Current Profile Picture: <strong>{{value}}</strong></h2>
        </div>
      </div>
      <div class="field">
        <label class="label">Enter Image Address of the picture you want to user </label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter the image address" />
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