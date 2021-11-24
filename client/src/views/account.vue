<template>
  <div class="about">
    <h1 class="title">Account Settings</h1>
    <h2 class="subtitle">Here you can view your profile and update!</h2>

    <div class="box">
      <table class="table is-striped is-fullwidth">
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'firstName'">
            <h2 class="subtitle"><strong>First Name:</strong> {{ value }}</h2>
          </td>
        </tr>
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'lastName'">
            <h2 class="subtitle"><strong> Last Name:</strong> {{ value }}</h2>
          </td>
        </tr>
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'handle'">
            <h2 class="subtitle"><strong>Handle: </strong> {{ value }}</h2>
          </td>
        </tr>
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'pic'">
            <h2 class="subtitle">
              <strong>Picture:</strong>
              <figure class="image is-48x48">
                <img :src="value" class="is-rounded"/>
              </figure>
            </h2>
          </td>
        </tr>
        <tr v-for="(value, name) in list" :key="name">
          <td v-if="name === 'emails'">
            <h2 class="subtitle"><strong>Email:</strong> {{ value[0] }}</h2>
          </td>
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
table {border-collapse: collapse;}
td    {padding: 6px;}
</style>