<template>
      <section class="section">
        <h1 class="title">Daily Progress!</h1>
        <h2 class="subtitle">
            View your daily progress here!     
        </h2>
        <div class="box">
            <h2 class="subtitle">
                Submit Your Daily Calorie and Exercise Goal!
            </h2>
            <form>
                <label class="label">Daily Calories (Cal):</label>
                <input type="number" class="input is-normal" v-model="totalCal">
                <label class="label">Daily Exercise (Min):</label>
                <input type="number" class="input is-normal" v-model="totalExercise">
                <button class="button is-link is-hovered" @click.prevent="update(totalCal,totalExercise)">Daily Goal!</button>
                <button class="button is-light is-hovered" @click.prevent="clear()">Clear</button>

            </form>
        </div>
        <div class="box">
            <h2 class="subtitle">Progress on : {{ date }} at {{ time }}</h2>
            <label class="label">Enter calories burned:</label>
            <input class="input is-normal" type= "number" v-model="enegry"><br>
            <button class="button is-link is-hovered" @click.prevent="updateCalories(enegry)">Log Calories!</button>
            <button class="button is-light is-hovered" @click.prevent="clear()">Clear</button>
            <p><strong>Daily Calorie Goal: {{total_calories}} Cal </strong></p>
            <progress class="progress is-link is-large" :value="this.calories" :max="this.total_calories"></progress>
            <p>Total Calories Burned: {{this.calories}}cal</p>

            <label class="label">Enter total exercise: </label>
            <input class="input is-normal" type="number" v-model="fitness"><br>
            <button class="button is-link is-hovered" @click.prevent="updateExercise(fitness)">Log Exercise!</button>
            <button class="button is-light is-hovered" @click.prevent="clear()">Clear</button>
            <p><strong>Daily Exercise: {{total_exercise}}min</strong></p>
            <progress class="progress is-link is-large" :value="this.exercise" :max="this.total_exercise">{{this.exercise}}%</progress>
            <p>Total Exercise: {{this.exercise}}min</p>
        </div>
    </section>
</template>

<script>
export default {
data: () => ({
  date: "",
  time: "",
  total_calories:0,
  total_exercise:0,
  calories: 0,
  exercise:0,
}),
methods: {
    update(temp1,temp2){
        this.total_calories = temp1;
        this.total_exercise = temp2;
    },
    updateExercise(val){
        if(this.exercise >= 60){
            this.$oruga.notification.open({
            message: 'You have Hit Your Daily Exercise Goal!',
            variant: 'info',
            position: 'top',
            closable: true
        })
        }else{
           return this.exercise += val;
        }
    },
    updateCalories(val){
        if(this.calories >= 1000){
            this.$oruga.notification.open({
            message: 'You have hit your daily calories!',
            variant: 'info',
            position: 'top',
            closable: true
        })
        }else{
            return this.calories += val;
        }
    },
    getDate: function () {
        return new Date().toLocaleDateString();
    },
    getTime: function () {
        return new Date().toLocaleTimeString();
    },
    clear(){
        this.calories =0;
        this.exercise = 0;
        this.total_calories=0;
        this.total_exercise=0;
    }
},
mounted: function () {
  this.date = this.getDate();
  this.time = this.getTime();},
};

</script>

<style>
.button {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>