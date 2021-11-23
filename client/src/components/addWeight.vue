<template>
  <div>
    <form class="card" @submit.prevent="$emit('add')">
      <div class="box">
        <div class="field">
          <div class="control">
            <label class="label">Enter a workout: </label>
            <input class="input" type="text" placeholder="Enter the name of the workout" v-model="weight.workout_name"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Number of Reps: </label>
            <input class="input" type="number" placeholder="Enter Rep Amount: " v-model="weight.rep"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Weight of Set (lbs): </label>
            <input class="input" type="number" placeholder="Enter the weight at which you are doing the set: " v-model="weight.set"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Enter Time Lapsed (Minutes): </label>
            <input class="input" placeholder="Enter Time Lapsed:" v-model="weight.time_taken"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Notes : </label>
            <textarea class="textarea" placeholder="Enter any notes you may have" rows="5" v-model="weight.notes"></textarea>
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
    newWeight: Object,
  },
  data() {
    return {
      weight: this.newWeight,
    };
  },
  watch: {
    newWeight() {
      this.weight = this.newWeight;
    },
  },
};
</script>

<style>
</style>