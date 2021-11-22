<template>
  <div class="box">
    <table class="table">
      <tbody>
        <tr>
          <th>Workout Name:</th>
          <td>
            <input class="input" type="text" placeholder="Enter Workout:" />
          </td>
        </tr>
        <tr>
          <th>Number of Reps:</th>
          <td>
            <input
              class="input"
              type="number"
              placeholder="Enter Rep amount:"
            />
          </td>
          <th>Work Set(lbs):</th>
          <td>
            <input
              class="input"
              type="number"
              placeholder="Enter weight of set: "
            />
          </td>
        </tr>
        <tr>
          <th>Total Time:</th>
          <td>
            <input
              class="input"
              type="number"
              placeholder="Enter Time Lapsed:"
              v-model="time"
            />
          </td>
        </tr>
        <tr>
          <th>Notes:</th>
          <td>
            <textarea
              class="textarea is-link"
              placeholder="Enter Notes:"
              rows="5"
            ></textarea>
          </td>
        </tr>
        <tr>
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
        newWeight: Object
    },
    data (){
        return{
            weight : this.newWeight
        }
    },
    watch: {
        newWeight(){
            this.weight = this.newWeight;
        }
    }
};
</script>

<style>
</style>