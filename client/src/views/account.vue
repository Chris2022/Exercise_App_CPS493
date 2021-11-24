<template>
  <div class="about">
    <h1 class="title">Account Settings</h1>
    <h2 class="subtitle">Here you can view your profile and update!</h2>

    <div class="box">
      <table class="table is-striped">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Handle</th>
          <th>Profile Pic</th>
          <th>Email</th>
        </tr>
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'firstName'">{{ value }}</td>
          <td v-if="name === 'lastName'">{{ value }}</td>
          <td v-if="name === 'handle'">{{ value }}</td>
          <td v-if="name === 'pic'">{{ value }}</td>
          <td v-if="name === 'emails'">{{ value[0] }}</td>
        </tr>
      </table>
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