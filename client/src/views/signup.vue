<template>
  <section class="hero is-link">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <add-user :new-user="user" @add="add()" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Add } from "../services/users";
import AddUser from "../components/addUser.vue";
export default {
  components: {
    AddUser,
  },
  data() {
    return {
        FIRST: "",
        LAST: " ",
        HAND: " ",
        PASS:"",
        PIC: " ",
        EMAIL: "",
        BIRTH: " ",
        STATE:"",
      user: ({
        firstName: null,
        lastName: null,
        handle: null,
        password: null,
        pic: null,
        emails: null,
        birth: null,
        state: null,
      }),
    };
  },
  async mounted() {
    this.user.firstName = this.FIRST;
    this.user.lastName = this.LAST;
    this.user.handle = this.HAND;
    this.user.password = this.PASS;
    this.user.pic = this.PIC;
    this.user.emails = this.EMAIL;
    this.user.birth = this.BIRTH;
    this.user.state = this.STATE;
  },
  methods: {
    async add() {
      const response = await Add(this.user);
      if (response) {
        this.$oruga.notification.open({
          message: "You have Successfully Signed Up ! Welcome to Fit-Bud!",
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
.signup-button {
  text-align: center;
}
</style>