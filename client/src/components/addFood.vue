<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="box">
      <div class="field">
        <div class="control">
          <label class="label">Enter Name of Food: </label>
          <input
            class="input"
            type="text"
            placeholder="Enter the name of the food you ate: e.g (Two Eggs and Two Slices of Toast"
            v-model="food.name"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Enter Name of Drink: </label>
          <input
            class="input"
            type="text"
            placeholder="Enter the name of the food you ate: e.g (Orange Juice)"
            v-model="food.drink"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Enter Calorie Amount: </label>
          <input
            class="input"
            type="number"
            placeholder="Enter Total Calorie Amount of the Food and Drink Combined if applicable"
            v-model="food.amount"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Choose Today's Date: </label>
          <input type="date" v-model="food.day" />
        </div>
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
    newFood: Object,
  },
  data() {
    return {
      food: this.newFood,
    };
  },
  watch: {
    newFood() {
      this.food = this.newFood;
    },
  },
};
</script>

<style>
</style>