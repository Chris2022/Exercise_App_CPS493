<template>
  <div>
    <form class="card" @submit.prevent="$emit('add')">
      <div class="box">
        <div class="field">
          <div class="control">
            <label class="label">Enter a workout: </label>
            <input
              class="input"
              type="text"
              placeholder="Enter the name of the workout"
              v-model="cardio.name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Enter Distance (Miles): </label>
            <input
              class="input"
              type="text"
              placeholder="Enter the total distance: "
              v-model="cardio.distance"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Enter number of calories burned: </label>
            <input
              class="input"
              placeholder="Enter Calories Burned:"
              v-model="cardio.calories"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Enter Time Lapsed (Minutes): </label>
            <input
              class="input"
              placeholder="Enter Time Lapsed:"
              v-model="cardio.time"
            />
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
  </div>
</template>

<script>
export default {
  props: {
    newCardio: Object,
  },
  data() {
    return {
      cardio: this.newCardio,
    };
  },
  watch: {
    newCardio() {
      this.cardio = this.newCardio;
    },
  },
};
</script>

<style>
</style>