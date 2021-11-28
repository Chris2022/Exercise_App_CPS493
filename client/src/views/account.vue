<template>
  <div class="container is-fluid">
    <h1 class="title animate__animated animate__bounceInLeft">
      Account Settings
    </h1>
    <h2 class="subtitle">
      Here you can view your profile and update! Click on the edit icon to
      update!
    </h2>
    <div class="columns is-centered">
      <div class="column is-half ">
        <form class="card" @submit.prevent="submit()">
          <div class="box">
            <div class="field">
              <label class="label">First Name: </label>
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Your First Name"
                  v-model="userUpdate.firstName"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Last Name: </label>
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter Your Last Name: "
                  v-model="userUpdate.lastName"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Handle: </label>
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter your handle, eg @cristiano"
                  v-model="userUpdate.handle"
                  required
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Profile Pic: </label>
              <p class="control">
                <input
                  class="input"
                  type="url"
                  placeholder="Enter Image Address (URL)"
                  v-model="userUpdate.pic"
                  required
                />
              </p>
            </div>
            <div class="field is-grouped" id="buttons">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light" type="reset">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="column is-half">
        <h2 class="title">Current Profile: </h2>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img :src="pic" alt="Placeholder image" />
                </figure>&nbsp;
              </div>
              <div class="media-content">
                <p class="title is-4">{{ firstName }} {{ lastName }}</p>
                <p class="subtitle is-6">
                  {{ handle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Update } from "../services/users";
import Session from "../services/session";
import router from "../router";

export default {
  data: () => ({
    userUpdate: {
      firstName: null,
      lastName: null,
      handle: null,
      pic: null,
    },
  }),
  computed: {
    firstName() {
      return Session.user.firstName;
    },
    lastName() {
      return Session.user.lastName;
    },
    handle() {
      return Session.user.handle;
    },
    pic() {
      return Session.user.pic;
    },
  },
  methods: {
    async submit() {
      const response = await Update(Session.user._id, this.userUpdate);
      if (response) {
        router.push("/account");
      }
    },
  },
};
</script>

<style>
</style>