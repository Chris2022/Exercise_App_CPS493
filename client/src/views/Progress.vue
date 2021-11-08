<template>
      <section class="section">
        <h1 class="title">Daily Progress!</h1>
        <h2 class="subtitle">
            View your daily progress here!     
        </h2>
        <div class="field">
            <h2 class="subtitle">Progress on : {{ date }} at {{ time }}</h2>
        </div>
        <div class="field">
            <label class="label">Enter calories burned:</label>
            <input type= "number" v-model="calories">
            <label class="label">Enter total exercise: </label>
            <input type="number" v-model="exercise">
        </div>
        <div>
            <p><strong>Daily Calorie Goal:700 Cal </strong></p>
            <progress class="progress is-info" value="75" max="100"></progress>
            <p><strong>Daily Exercise: 30 min</strong></p>
            <progress class="progress is-info" value="75" max="100"></progress>
        </div>
    </section>
</template>

<script>
export default {
data: () => ({
  date: "",
  time: "",
  value:0,
}),
methods: {
    // getValue(){
    // },
    getDate: function () {
        return new Date().toLocaleDateString();
    },
    getTime: function () {
        return new Date().toLocaleTimeString();
    },
},
mounted: function () {
  this.date = this.getDate();
  this.time = this.getTime();},
};

</script>

<style>
</style>