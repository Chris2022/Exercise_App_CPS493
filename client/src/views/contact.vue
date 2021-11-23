<template>
  <div>
    <h1 class="title animate__animated animate__bounceInLeft">Contact Us!</h1>
    <h2 class="subtitle">
      If you're having any issues or comments please feel do not hesitate to let
      us know, just leave your name, email, and message and we will contact you
      as soon as possible. Please also view the
      <router-link to="/FAQ">FAQ's</router-link> to learn all the features or
      common questions about Fit-Bud.
    </h2>
    <div>
      <add-contact :new-contact="newContact" @add="add()" />
    </div>
  </div>
</template>

<script>
import addContact from "../components/addContact.vue";
import { Add } from "../services/Contact";
export default {
  components: { addContact },
  data() {
    return {
      NAME: "",
      EMAIL: "",
      MESSAGE: "",
      newContact: { name: "", email: "", message: "" },
    };
  },
  async mounted() {
    this.newContact.name = this.NAME;
    this.newContact.email = this.email;
    this.newContact.message = this.email;
  },
  methods: {
    async add() {
      const response = await Add(this.newContact);
      if (response) {
        this.$oruga.notification.open({
          message: "Message Succesfully Sent!",
          variant: "info",
          position: "top",
          closable: true,
        });
      } else {
        this.$oruga.notification.open({
          message: "Error in sending message, please try again later!",
          variant: "info",
          position: "top",
          closable: true,
        });
      }
    },
  },
};
</script>

<style>
#buttons {
  padding-top: 10px;
}
</style>