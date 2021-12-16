<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="box">
      <div class="field">
        <div class="control">
            <p class="content"><b>Search for Foods: </b> {{ selected }}</p>
            <o-field label="Enter the name of your food">
            <o-autocomplete  rounded expanded v-model="name" :data="filteredDataArray"  placeholder="e.g Eggs" icon="search" clearable @select="option => selected = option.Food">
             <template v-slot:empty>No results found</template>
            </o-autocomplete>
            </o-field>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Name of Food: </label>
          <input
            class="input"
            type="text"
            placeholder="Name of the food you ate: e.g (Eggs)"
            v-model="food.name"
            readonly
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Enter Name of Drink: </label>
          <input
            class="input"
            type="text"
            placeholder="Enter the name of the drink"
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
import {  GetFood } from "../services/foods";
export default {
  props: {
    newFood: Object,
  },
  data() {
    return {
      dater : [],
      food: this.newFood,
      name: '',
      selected: null,
    };
  },
  async mounted(){
    this.dater = await GetFood();
    console.log("dater", this.dater)
  },
  computed: {
      filteredDataArray() {
        return this.dater.filter(option => {
          return (
            option.Food
              .toString()
              .toLowerCase()
              .indexOf(this.name) >= 0
          )
        })
      }
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