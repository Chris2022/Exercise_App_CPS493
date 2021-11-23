<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="box">
      <div class="field">
        <div class="control">
          <label class="label">Name: </label>
          <input
            class="input"
            type="text"
            placeholder="Enter your name here"
            v-model="contact.name"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Email: </label>
          <input
            class="input"
            type="text"
            placeholder="Enter your Email here"
            v-model="contact.email"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Message: </label>
          <textarea
            class="textarea"
            placeholder="Leave your message here"
            v-model="contact.message"
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped" id="buttons">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" type="reset">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    newContact: Object,
  },
  data() {
    return {
      contact: this.newContact,
    };
  },
  watch: {
    newContact() {
      this.contact = this.newContact;
    },
  },
};
</script>

<style>
</style>