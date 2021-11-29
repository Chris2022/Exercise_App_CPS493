<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="container" style="width: 40%">
      <div class="field" style="text-align: center">
        <label class="label">First Name</label>
        <input
          class="input"
          type="text"
          placeholder="First Name"
          v-model="user.firstName"
        />
      </div>
      <div class="field" style="text-align: center">
        <label class="label">Last Name</label>
        <input
          class="input"
          type="text"
          placeholder="Last Name"
          v-model="user.lastName"
        />
      </div>
      <div class="field" style="text-align: center">
        <label class="label">Handle</label>
        <input
          class="input"
          type="text"
          placeholder="Last Name"
          v-model="user.handle"
        />
      </div>
      <div class="field" style="text-align: center">
        <label class="label">Password : </label>
        <input
          class="input"
          type="password"
          placeholder="Enter password for account"
          v-model="user.password"
        />
      </div>
      <div class="field">
        <label class="label">Profile Pic: </label>
        <p class="control">
          <input
            class="input"
            type="url"
            placeholder="Enter Image Address (URL)"
            v-model="user.pic"
            required
          />
        </p>
      </div>
      <div class="field" style="text-align: center">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Email"
            v-model="user.email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field" style="text-align: center">
        <label class="label">Date of Birth</label>
        <input class="input" type="date" v-model="user.birth" />
      </div>
      <div class="select is-fullwidth" id="select_state">
        <select v-model="user.state">
          <option>Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div class="field" style="text-align: center">
        <input type="checkbox" name="updates" />
        Yes, I would like to receive by email the latest news, innovation
        updates, and offers from Fit-Bud.
        <p style="text-align: center">
          By creating an account with Fit-Bud you agree to our
          <router-link to="/signup" style="color: dodgerblue"
            >Terms & Privacy</router-link
          >.
        </p>
      </div>
      <div class="field is-grouped" id="buttons">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" type="reset">Clear</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    newUser: Object,
  },
  data() {
    return {
      user: this.newUser,
    };
  },
  watch: {
    newUser() {
      this.user = this.newUser;
    },
  },
};
</script>

<style>
</style>