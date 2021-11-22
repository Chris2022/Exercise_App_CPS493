<template>
  <div class="box">
    <table class="table">
      <tbody>
        <tr>
          <th>Enter a workout:</th>
          <td>
            <input
              class="input"
              type="text"
              placeholder="Enter Workout: "
              v-model="cardio.name"
            />
          </td>
          <th>Calories Burned:</th>
          <td>
            <input
              class="input"
              type="number"
              placeholder="Enter Calorie Amount:"
              v-model="cardio.calories"
            />
          </td>
          <th>Total Time:</th>
          <td>
            <input
              class="input"
              type="number"
              placeholder="Enter Time Lapsed:"
              v-model="cardio.time"
            />
          </td>
          <td>
            <button class="button is-link" @submit.prevent="$emit('add')">
              Submit
            </button>
          </td>
          <td>
            <button class="button is-light" @click.prevent="clear()" type="reset">
              Clear
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    props :{
        newCardio: Object
    },
    data (){
        return{
            cardio : this.newCardio
        }
    },
    watch: {
        newReview(){
            this.cardio = this.newCardio;
        }
    }
};
</script>

<style>
</style>