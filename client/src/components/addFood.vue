<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="box">
      <div class="field">
        <div class="control">
            <p class="content"><b>Enter Name of Food: </b> {{ selected }}</p>
            <o-field label="Enter the name of your food">
            <o-autocomplete  v-model="name" :data="filteredDataArray" placeholder="e.g. Two eggs and Toast" icon="search" clearable @select="option => selected = option">
            </o-autocomplete>
            </o-field>
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
import {  GetAll } from "../services/foods";
export default {
  props: {
    newFood: Object,
  },
  data() {
    return {
      dater : [],
      food: this.newFood,
      data: ['Angular', 'Angular 2', 'Aurelia', 'Backbone', 'Ember', 'jQuery', 'Meteor', 'Node.js', 'Polymer', 'React', 'RxJS', 'Vue.js'],
      name: '',
      selected: null,
    };
  },
  async mounted(){
    this.dater = await GetAll();
  },
  computed: {
      filteredDataArray() {
        return this.data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
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